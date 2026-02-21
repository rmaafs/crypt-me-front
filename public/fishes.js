var STARTING_FISH_COUNT = 5;

// globals
var $pond, pondWidth, pondHeight;
var fishes = [];    // array of fish state objects
var foodItems = []; // array of { $el, x, y, id }
var foodIdCounter = 0;
var lastTime = 0;
var hintShown = false;
var hintTimer = null;

// ── Bootstrap ──

$(function () {
  $pond = $(".pond");
  determinePondSize();
  $(window).on("resize", determinePondSize);
  $("body").on("click", stirPond);
  spawnStartingFish();
  requestAnimationFrame(gameLoop);
  scheduleHint();
});

function determinePondSize() {
  pondWidth = $pond.width();
  pondHeight = $pond.height();
}

// ── Main loop (requestAnimationFrame) ──

function gameLoop(timestamp) {
  var dt = Math.min((timestamp - lastTime) / 1000, 0.1); // delta in seconds, capped
  lastTime = timestamp;

  for (var i = 0; i < fishes.length; i++) {
    updateFish(fishes[i], dt);
  }

  checkFoodCollisions();
  requestAnimationFrame(gameLoop);
}

// ── Fish state & spawning ──

function spawnStartingFish() {
  for (var i = 0; i < STARTING_FISH_COUNT; i++) {
    spawnFish(getRandom(pondWidth), getRandom(pondHeight));
  }
}

function spawnFish(x, y) {
  var $el = $(
    '<div class="fish"><div class="fish-bob"><div class="fish-direction"><div class="fish-body"></div></div></div></div>'
  );
  var colors = [1, 2, 3, 4];
  $el.addClass("fish-" + colors[Math.floor(getRandom(4))]);

  var angle = getRandom(Math.PI * 2);
  var fish = {
    $el: $el,
    x: x,
    y: y,
    vx: Math.cos(angle) * 20,
    vy: Math.sin(angle) * 20,
    angle: angle,           // current heading
    targetAngle: angle,     // desired heading
    speed: 25 + getRandom(20), // base wander speed
    maxSpeed: 80 + getRandom(200),
    wiggleTime: getRandom(100),
    wiggleAmp: 3 + getRandom(3),
    facingLeft: false,
    wanderTimer: 3 + getRandom(5),   // seconds until next wander decision
    bubbleTimer: 4 + getRandom(6),
    foodDelay: 0,           // delay before reacting to food
    chasing: false,         // whether actively chasing food
    chaseSpeedMult: 0.3 + getRandom(1.5) // random multiplier 0.3–1.8 per fish
  };

  fish.facingLeft = fish.vx < 0;
  if (fish.facingLeft) $el.addClass("fish-flip");

  $el.find(".fish-bob").css("animation-delay", "-" + getRandom(7) + "s");
  $el.find(".fish-body").on("click", function () {
    $el.toggleClass("fish-spin");
    return false;
  });

  applyPosition(fish);
  $pond.append($el);

  // spawn fade-in
  $el.css("opacity", 0);
  setTimeout(function () { $el.css("opacity", 1); }, 50);

  fishes.push(fish);
}

// ── Fish update (per-frame) ──

function updateFish(fish, dt) {
  // Timers
  fish.wanderTimer -= dt;
  fish.bubbleTimer -= dt;
  fish.wiggleTime += dt * 4;

  if (fish.foodDelay > 0) {
    fish.foodDelay -= dt;
  }

  // Decide target
  var targetSpeed = fish.speed;

  if (foodItems.length > 0 && fish.foodDelay <= 0) {
    // Chase nearest food
    var nearest = findNearestFood(fish.x, fish.y);
    if (nearest) {
      fish.chasing = true;
      var dx = nearest.x - fish.x;
      var dy = nearest.y - fish.y;
      fish.targetAngle = Math.atan2(dy, dx);
      var dist = Math.sqrt(dx * dx + dy * dy);
      // Speed up when far, slow down near food (per-fish random speed)
      targetSpeed = Math.min(fish.maxSpeed, (100 + dist * 0.8) * fish.chaseSpeedMult);
    }
  } else {
    fish.chasing = false;
    // Wander: pick new random direction periodically
    if (fish.wanderTimer <= 0) {
      fish.wanderTimer = 3 + getRandom(5);
      fish.targetAngle += (getRandom(Math.PI) - Math.PI / 2); // turn ±90°
      targetSpeed = 20 + getRandom(30);
      fish.speed = targetSpeed;
    }

    // Steer away from edges
    var margin = 80;
    if (fish.x < margin) fish.targetAngle = lerpAngle(fish.targetAngle, 0, 0.1);
    if (fish.x > pondWidth - margin) fish.targetAngle = lerpAngle(fish.targetAngle, Math.PI, 0.1);
    if (fish.y < margin) fish.targetAngle = lerpAngle(fish.targetAngle, Math.PI / 2, 0.1);
    if (fish.y > pondHeight - margin) fish.targetAngle = lerpAngle(fish.targetAngle, -Math.PI / 2, 0.1);
  }

  // Smoothly rotate toward target angle
  var turnRate = fish.chasing ? 3.0 : 1.5; // turn faster when chasing
  fish.angle = lerpAngle(fish.angle, fish.targetAngle, turnRate * dt);

  // Accelerate / decelerate toward target speed
  var currentSpeed = Math.sqrt(fish.vx * fish.vx + fish.vy * fish.vy);
  var accel = fish.chasing ? 5 : 2; // accelerate much faster when chasing
  var newSpeed = currentSpeed + (targetSpeed - currentSpeed) * dt * accel;

  fish.vx = Math.cos(fish.angle) * newSpeed;
  fish.vy = Math.sin(fish.angle) * newSpeed;

  // Sinusoidal wiggle perpendicular to heading (tail sway)
  var wiggle = Math.sin(fish.wiggleTime * (fish.chasing ? 8 : 5)) * fish.wiggleAmp;
  var perpX = -Math.sin(fish.angle) * wiggle;
  var perpY = Math.cos(fish.angle) * wiggle;

  // Update position
  fish.x += (fish.vx + perpX) * dt;
  fish.y += (fish.vy + perpY) * dt;

  // Clamp to pond bounds (soft bounce)
  if (fish.x < 10) { fish.x = 10; fish.vx = Math.abs(fish.vx) * 0.5; fish.targetAngle = 0; }
  if (fish.x > pondWidth - 10) { fish.x = pondWidth - 10; fish.vx = -Math.abs(fish.vx) * 0.5; fish.targetAngle = Math.PI; }
  if (fish.y < 10) { fish.y = 10; fish.vy = Math.abs(fish.vy) * 0.5; fish.targetAngle = Math.PI / 2; }
  if (fish.y > pondHeight - 10) { fish.y = pondHeight - 10; fish.vy = -Math.abs(fish.vy) * 0.5; fish.targetAngle = -Math.PI / 2; }

  // Flip sprite based on horizontal direction
  var goingLeft = fish.vx < 0;
  if (goingLeft !== fish.facingLeft) {
    fish.facingLeft = goingLeft;
    if (goingLeft) {
      fish.$el.addClass("fish-flip");
    } else {
      fish.$el.removeClass("fish-flip");
    }
  }

  applyPosition(fish);

  // Bubbles
  if (fish.bubbleTimer <= 0) {
    fish.bubbleTimer = 4 + getRandom(8);
    blowBubble(fish);
  }
}

function applyPosition(fish) {
  fish.$el.css("transform", "translate(" + fish.x + "px, " + fish.y + "px)");
}

// ── Angle helpers ──

function normalizeAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function lerpAngle(current, target, t) {
  var diff = normalizeAngle(target - current);
  return current + diff * Math.min(t, 1);
}

// ── Bubbles ──

function blowBubble(fish) {
  var $bubble = $('<div class="bubbleFish">');
  if (fish.facingLeft) {
    $bubble.addClass("bubbleFish-flip");
  }
  $bubble.css({ top: fish.y + "px", left: fish.x + "px" });
  $pond.prepend($bubble);
  setTimeout(function () { $bubble.remove(); }, 4000);
}

// ── Click handler ──

function stirPond(event) {
  var fueraDelCard = true;
  $(event.target)
    .parents()
    .each(function (index, val) {
      if ($(val).hasClass("card")) {
        fueraDelCard = false;
        return;
      }
    });

  if (fueraDelCard) {
    hideHint();
    spawnFood(event.clientX, event.clientY);
  }
}

// ── Food ──

function spawnFood(x, y) {
  var $food = $('<div class="food"></div>');
  $food.css({ left: x + "px", top: y + "px" });
  $pond.append($food);

  var food = { $el: $food, x: x, y: y, id: ++foodIdCounter };
  foodItems.push(food);

  // Give each fish a random reaction delay (2–5s)
  for (var i = 0; i < fishes.length; i++) {
    if (!fishes[i].chasing) {
      fishes[i].foodDelay = 0.5 + getRandom(4.5);
    }
  }
}

function findNearestFood(fx, fy) {
  if (foodItems.length === 0) return null;
  var nearest = null;
  var nearestDist = Infinity;
  for (var i = 0; i < foodItems.length; i++) {
    var dx = fx - foodItems[i].x;
    var dy = fy - foodItems[i].y;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d < nearestDist) {
      nearestDist = d;
      nearest = foodItems[i];
    }
  }
  return nearest;
}

function checkFoodCollisions() {
  for (var i = 0; i < fishes.length; i++) {
    var fish = fishes[i];
    for (var j = foodItems.length - 1; j >= 0; j--) {
      var food = foodItems[j];
      var dx = fish.x - food.x;
      var dy = fish.y - food.y;
      if (Math.sqrt(dx * dx + dy * dy) < 30) {
        eatFood(food);
        break;
      }
    }
  }
}

function eatFood(food) {
  // Remove from array
  for (var i = 0; i < foodItems.length; i++) {
    if (foodItems[i].id === food.id) {
      foodItems.splice(i, 1);
      break;
    }
  }

  food.$el.addClass("food-eaten");
  setTimeout(function () { food.$el.remove(); }, 400);

  // If more food remains, give fish a short delay before chasing next
  if (foodItems.length > 0) {
    for (var j = 0; j < fishes.length; j++) {
      fishes[j].foodDelay = 0.5 + getRandom(1.5);
    }
  }
  // If no food left, fish will naturally resume wandering on next frame
}

// ── Utility ──

function getRandom(upper) {
  return Math.random() * upper;
}

// ── Hint tooltip ──

function scheduleHint() {
  if (hintShown) return;
  var delay = 8000 + getRandom(12000); // 8-20s
  hintTimer = setTimeout(showHint, delay);
}

function showHint() {
  if (fishes.length === 0 || foodItems.length > 0) {
    scheduleHint();
    return;
  }

  var fish = fishes[Math.floor(getRandom(fishes.length))];
  var $hint = $('<div class="fish-hint">Feed me! (Click)</div>');
  fish.$el.find(".fish-bob").append($hint);
  hintShown = true;

  // Auto-remove after 4s
  setTimeout(function () {
    $hint.addClass("fish-hint-out");
    setTimeout(function () {
      $hint.remove();
      hintShown = false;
      scheduleHint();
    }, 500);
  }, 4000);
}

function hideHint() {
  $(".fish-hint").remove();
  hintShown = false;
  if (hintTimer) {
    clearTimeout(hintTimer);
    hintTimer = null;
  }
  // Schedule next hint after feeding
  setTimeout(scheduleHint, 15000);
}

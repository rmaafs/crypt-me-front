import React from "react";
import "./KeyboardHint.css";

const isMac = navigator.platform.toUpperCase().includes("MAC");
const modKey = isMac ? "⌘" : "Ctrl";

const KeyboardHint = ({ shortcut, description }) => {
  const keys = shortcut.replace("Mod", modKey).split("+");

  return (
    <span className="keyboard-hint">
      {keys.map((key, i) => (
        <React.Fragment key={i}>
          <kbd>{key.trim()}</kbd>
          {i < keys.length - 1 && " + "}
        </React.Fragment>
      ))}
      <span className="keyboard-hint-text">{description}</span>
    </span>
  );
};

export default KeyboardHint;

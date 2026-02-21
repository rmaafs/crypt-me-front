import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// eslint-disable-next-line no-console
console.log(
  "\n\n%cHello developer!\n\nContribute to the project:\nhttps://github.com/rmaafs/crypt-me-front \nhttps://github.com/rmaafs/crypt-api-worker \n\n",
  "color:aqua"
);

serviceWorker.unregister();

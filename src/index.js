import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// eslint-disable-next-line no-console
console.log(
  "\n\n%cHello developer!\n\nContribute to the project:\nhttps://github.com/rmaafs/crypt-me-front \nhttps://github.com/rmaafs/crypt-me-api \n\n%cPostman API REST:\nhttps://documenter.getpostman.com/view/9525350/U16krkhd \n\n\n",
  "color:aqua",
  "color:orange"
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

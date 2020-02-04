import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";
import {isProduction} from "./utils";

// analytics
ReactGA.initialize("UA-67512414-4");
ReactGA.pageview(window.location.pathname + window.location.search);

// pre tab close hook
if (isProduction()) {
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    return (ev.returnValue = "Are you sure you want to close?");
  });
}

// lets rock
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

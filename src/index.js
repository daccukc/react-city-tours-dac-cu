import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

/* navigation bar menu */
//ReactDOM.render(<NavigationBarApp />, document.getElementById("root"));

/* javascript example */
//ReactDOM.render(<App />, document.getElementById("root"));

/* form elements example */
//ReactDOM.render(<FormComponents />, document.getElementById("root"));

/* parent and child relationship using this.props.children example */
//ReactDOM.render(<ParentProp />, document.getElementById("root"));

/* using ref example. worked on 03/29/2018 */
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

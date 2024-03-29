import * as React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import configureStore from "./store";

const store = configureStore({
  posts: {
    payload: [{ title: "title1", body: "body1" }]
  }
});

render(<App store={store} />, document.getElementById("root"));

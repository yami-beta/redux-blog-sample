import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PostListContainer } from "./PostListContainer";
import { PostFormContainer } from "./PostFormContainer";

const { Fragment } = React;

export const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <h1>Redux Blog Sample</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Create Post</Link>
            </li>
          </ul>
          <Route exact path="/" component={PostListContainer} />
          <Route path="/new" component={PostFormContainer} />
        </Fragment>
      </Router>
    </Provider>
  );
};

import React from "react";
// eslint-disable-next-line no-unused-vars
import { Redirect, Route, Switch } from "react-router-dom";
import TodoList from "./routes/TodoList";
import TodoAdd from "./routes/TodoAdd";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/todo">
        <TodoList />
      </Route>
      <Route exact path="/add">
        <TodoAdd />
      </Route>
      <Route path="*">
        <Redirect to={'/todo'} />
      </Route>
    </Switch>
  );
};
export default Content;
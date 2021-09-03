import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import TodoList from "../views/TodoList";
import TodoAdd from "../views/TodoAdd";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

const Content = () => {
  const authKey = useSelector(state => state.authKey);
  if (!authKey)
  {
    return (<Redirect to={'/todo'} />);
  }

  return (
    <Container>
      <Switch>
        <Route exact path="/todo">
          {authKey && <TodoList />}
        </Route>
        <Route exact path="/add">
          <TodoAdd />
        </Route>
        <Route path="*">
          <Redirect to={'/todo'} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;

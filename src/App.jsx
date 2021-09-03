import React from 'react';
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_AUTH_KEY } from "./constants/ActionTypes";


function App() {
  const list = useSelector(state => state.authKey);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          console.log('fetch AuthKey with saga -> add to state -> listener will save it to the localStorage');
          return dispatch({ type: FETCH_AUTH_KEY });
        }}>Sign in</Button>

      <div>
        <h1>{list}</h1>
      </div>
      {/*<header></header>*/}
      {/*<Content></Content>*/}
    </>
  );
}

export default App;

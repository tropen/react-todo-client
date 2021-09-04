import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./layouts/Content";
import Header from "./layouts/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
};

export default App;

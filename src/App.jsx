import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
};

export default App;

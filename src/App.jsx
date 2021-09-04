import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./layouts/Content";
import Header from "./layouts/Header";
import { Toast } from "./layouts/Toast";

const App = () => {
  return (
    <Router>
      <Header />
      <Content />
      <Toast />
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
import ProducInfo from "./component/ProducInfo";
import Context from "./component/Context";

function App() {
  return (
    <Router>
      <Context>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} ></Route>
          <Route path=":id" element={<ProducInfo />} />
        </Routes>
      </Context>
    </Router>
  );
}

export default App;

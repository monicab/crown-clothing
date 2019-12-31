import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage } from "./pages/home-page/home-page.component";
import { ShopPage } from "./pages/shop-page/shop-page.component";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/"><HomePage/></Route>
        <Route path="/shop"><ShopPage/></Route>
      </div>
    </Router>
  );
}

export default App;

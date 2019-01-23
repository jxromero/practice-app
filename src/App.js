import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import "./reset.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/products";
import NotFound from "./components/not-found";
import Home from "./components/home";
import ProductDetail from "./components/product/productdetail";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products" component={Products} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;

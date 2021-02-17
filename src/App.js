import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Quotes from "./Containters/Quotes/Quotes";
import AddQuote from "./Containters/AddQuote/AddQuote";
import Header from "./Components/UI/Header/Header";
import Edit from "./Containters/Edit/Edit";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Quotes}></Route>
          <Route path="/category/:name" exact component={Quotes}></Route>
          <Route path="/add-quote" component={AddQuote}></Route>
          <Route path="/edit-quote/:id" component={Edit}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

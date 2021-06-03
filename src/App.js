import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListarCliente from "./cliente/listar";
import IncluirCliente from "./cliente/incluir";
import AlterarCliente from "./cliente/alterar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/cliente/listar" component={ListarCliente} />
            <Route path="/cliente/incluir" component={IncluirCliente} />
            <Route path="/cliente/alterar/:id" component={AlterarCliente} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

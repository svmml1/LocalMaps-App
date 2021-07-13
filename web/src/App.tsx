import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Home} from './pages/Home'

function App() {

  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#fff",
  };


  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/new">
          Renderizando a New
        </Route>
      </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";

import store from "@core/store";
import { history } from "@core/models/router/utils";
import theme from "theme";
import "./App.css";
import Website from "website";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <div className="App">
              <Website />
            </div>
          </HelmetProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;

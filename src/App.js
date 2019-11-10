import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import store from "@core/store";
import theme from "theme";
import "./App.css";
import Website from "website";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Website />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

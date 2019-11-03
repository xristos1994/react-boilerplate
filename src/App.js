import React from "react";
import "./App.css";
import { TestComponent } from "components";
import { UiModal } from "@core/components";
import { UiSnackbar } from "@core/components";

const App = () => {
  return (
    <div className="App">
      <TestComponent />
      <UiModal />
      <UiSnackbar />
    </div>
  );
};

export default App;

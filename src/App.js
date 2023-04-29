import React from "react";
import { Controlled } from "./Controlled";
import { UnControlled } from "./UnControlled";

const App = () => {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <Controlled />
      <UnControlled />
    </div>
  );
};

export default App;

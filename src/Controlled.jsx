import React, { useState } from "react";

export const Controlled = () => {
  console.log("Controlled");
  const [state, setState] = useState("");
  return (
    <div style={{ flex: 1 }}>
      <h1>Controlled</h1>
      <h2>... {state} </h2>
      <input onChange={(e) => setState(e.target.value)} />
    </div>
  );
};

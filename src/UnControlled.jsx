import React, { useRef, useState } from "react";

export const UnControlled = () => {
  const title = useRef();
  const [state, setState] = useState("");
  console.log("UnControlled", title);

  const onData = () => {
    console.log("UnControlled", title.current);
    //   setState(title.current.value);
    //   title.current.value = "";
  };

  return (
    <div style={{ flex: 1 }}>
      <h1>UnControlled</h1>
      <h2>... {state}</h2>
      <input ref={title} type="text" />
      <button onClick={onData}>Click </button>
    </div>
  );
};

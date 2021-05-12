import React, { useState } from "react";

function Button(props) {
  // dkong: This hook(?) takes a function and a string.

  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0);
  console.log(`PR`, props);

  //   return <button onClick={() => props.function}>{props.text}</button>;
  return <button>{props.text}</button>; // NOT WORKING YET
}
export default Button;

import React, { useState } from "react";
import SourceJson from "./components/SourceJson";
import TargetJson from "./components/TargetJson";
import Nav from "./components/Nav";

function App() {
  const [inp, setinp] = useState("");

  const collectInput = (val) => {
    setinp(val);
  };



  return (
    <div>
      <Nav />
      <SourceJson collectInput={collectInput} />
      <TargetJson outputval={inp} />
    </div>
  );
}

export default App;

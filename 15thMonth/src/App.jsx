// import React, { useState } from "react";
// import LightMeUp from "../components/lightMeUp";
import DYLM from "../components/DYLM";

export default function App() {
  // const [finished, setFinished] = useState(false);

  return (
    <>
      {/* { {!finished ? (
        <LightMeUp onFinished={() => setFinished(true)} />
      ) : (
        <DYLM />
      )} } */}

      <DYLM />
    </>
  );
}

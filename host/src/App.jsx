import React, { useState } from "react";
import ReactDOM from "react-dom";
import {System} from "./utils/loadComponents"
import "./index.scss";

const App = () => {
  const [system, setSystem] = useState(undefined);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <button
        onClick=
        {() => {
          setSystem({
            url: "http://localhost:8081/remoteEntry.js",
            scope: "dsl",
            module: "./Button",
          });
        }}>
          Carregar modulo
      </button>
      <System system={system} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOMClient from "react-dom/client";
import Lodash from "lodash";

import ReactPreview from "./ReactPreview";
const App = () => {
  const [code, setCode] = React.useState(``);
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  return (
    <>
      <textarea value={code} onChange={handleChange} />
      <ReactPreview code={code} scope={{ React, Lodash }} />
    </>
  );
};
ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havenese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatail" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" /> */}
      < SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <h1>Hello!</h1>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

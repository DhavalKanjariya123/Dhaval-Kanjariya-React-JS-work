import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const Myname = "Dhaval Kanjariya";
function Name() {
  return (
    <>
      <div className="text">
        <h1>My name is: {Myname}</h1>
        <address style={{color:"green"}}>Raiya road Rajkot</address>
      </div>
    </>

  );
}

const prient = ReactDOM.createRoot(document.getElementById("demo"));
prient.render(<Name />);
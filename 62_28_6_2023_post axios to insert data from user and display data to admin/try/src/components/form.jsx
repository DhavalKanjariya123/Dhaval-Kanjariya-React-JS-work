import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Form() {

  const fname = useRef("");
  const age = useRef("");
  const mobile = useRef("");
  const Navigate = useNavigate("");
  

  const Click = () => {
    var insert = {
      fname: fname.current.value,
      age: age.current.value,
      mobile:mobile.current.value,
    }

    axios.post("http://localhost:4000/product", insert)
      .then(() => {
        alert("hi")
        Navigate("/")
      });
  }

  return (
    <>

      
        <div align="center">
            <label>Name: </label>
            <input type="text" ref={fname} /> <br /> <br />
            <label>Mobile: </label>
            <input type="number" ref={mobile} /> <br /> <br />
            <label>Age: </label>
            <input type="number" ref={age} /> <br /> <br />
            <button type="button" onClick={Click}>Submit</button>
          </div>
        

    </>
  );
}

export default Form;
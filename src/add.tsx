import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import listed from "./contact_list";
var idCount = 8;
function Form() {
  const [na, setNa] = useState<string>("");
  const [number, setNumber] = useState<any>("");

  const handleChange = (event: any) => {
    if (event.target.name === "name") {
      setNa(event.target.value);
    } else {
      setNumber(Number(event.target.value));
    }
  };
  const addcontact = () => {
    const newContact = { id: idCount, name: na, phoneNumber: number };
    listed.push(newContact);
    setNa("");
    setNumber("");
    idCount = idCount + 1;
  };
  return (
    <div className="form-main">
      <input
        autoComplete="off"
        type="text"
        placeholder="Name"
        className="name"
        name="name"
        value={na}
        onChange={handleChange}
      />
      <br></br>
      <input
        autoComplete="off"
        type="digit"
        placeholder="Mobile No."
        className="number"
        name="number"
        value={number}
        onChange={handleChange}
      />
      <br></br>
      <button onClick={addcontact} className="btn" id="btn">
        Add Contact
      </button>
      <br></br>
    </div>
  );
}
export default Form;

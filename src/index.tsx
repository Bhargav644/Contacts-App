import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import List from "./view";
import Form from "./add";
const heading: string = "Contacts-App";

function Contacts() {
  let [tr, setTr] = useState({
    transform: "translateX(-100%)",
  });
  const translatorAdd = (e: any) => {
    if ((e.currentTarget.id = "add")) {
      setTr({
        transform: "translateX(0)",
      });
    }
  };
  const check = () => {
    setTr({
      transform: "translateX(-100%)",
    });
  };
  return (
    <div className="main">
      <section className="heading">
        <i className="far fa-address-book"></i>
        <h1>{heading.toUpperCase()}</h1>
      </section>
      <section className="nav-bar">
        <ul>
          <a onClick={translatorAdd} id="add" href="#">
            <li>Add-Contact</li>
          </a>
          <a href="#" onClick={check}>
            <li>Contacts</li>
          </a>
        </ul>
      </section>
      <div className="body-div">
        <div className="flex-box" style={tr}>
          <div className="add-contact">
            <Form />
          </div>
          <div className="contact-list">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Contacts />, document.getElementById("root"));

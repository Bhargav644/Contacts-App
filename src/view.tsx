import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import listed from "./contact_list";
import { getAllJSDocTagsOfKind } from "typescript";

function List() {
  return (
    <section className="main-section">
      {listed.map((listed) => {
        return <Individual key={listed.id} listed={listed}></Individual>;
      })}
    </section>
  );
}

const Individual = (props: any) => {
  const { id, phoneNumber, name } = props.listed;
  return (
    <div className="each-contact" id="each-contact">
      <div className="each-contact-head">
        <section className="image-part">{name[0]}</section>
        <section className="name-of-contact">{name}</section>
        <section className="option">
          Mobile:
          <br id="break" />
          {phoneNumber}
        </section>
      </div>
    </div>
  );
};
export default List;

import React from "react";
import { db } from "../firebase.js";
import "./contact.scss";

export const Contact = () => {
  const submit = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    if (name === "") alert("Write your name");
    else if (email === "") alert("Write your email");
    else if (text === "") alert("Write your message");
    else
      db.collection("messages")
        .get()
        .then((res) => {
          db.collection("messages")
            .doc(res.size + 1 + "")
            .set({
              name: name,
              email: email,
              text: text,
            })
            .then(() => {
              document.getElementById("name").value = '';
              document.getElementById("email").value = '';
              document.getElementById("text").value = '';
              alert('Your message sent')
            })
        });
  };
  return (
    <div className="contact" id="contact">
      <div className="headLine">CONTACT US</div>
      <div className="zuraas"></div>
      <div>
        <input id="name" placeholder="Name" className="contactName"></input>
        <input id="email" placeholder="Email" className="contactEmail"></input>
      </div>
      <input id="text" placeholder="Message" className="contactMessage"></input>
      <button className="contactButton" onClick={() => submit()}>
        SEND MESSAGE
      </button>
    </div>
  );
};

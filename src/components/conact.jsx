import React from "react";
import { db } from "./firebase";

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
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("text").value = "";
              alert("Your message sent");
            });
        });
  };
  return (
    <div className="contact" id="contact">
      <div className="headLine">Бидэнтэй холбогдох</div>
      <div className="zuraas"></div>
      <input id="name" placeholder="NAME" className="contactNameEmail"></input>
      <div className="contactLineGreen"></div>
      <input
        id="email"
        placeholder="EMAIL"
        className="contactNameEmail"
      ></input>
      <div className="contactLine"></div>
      <textarea
        id="text"
        placeholder="MESSAGE"
        className="contactMessage"
      ></textarea>
      <button className="contactButton" onClick={() => submit()}>
        SEND
      </button>
    </div>
  );
};

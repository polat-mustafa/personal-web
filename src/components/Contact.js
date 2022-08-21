import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Result = () => {
  const closeButton = () => {
    document.querySelector(".result").style.display = "none";
  };

  return (
    <div className="result">
      <div className="close">
        <i onClick={closeButton}>X</i>
      </div>
      <div>
        {" "}
        Message sent, Thank you for your message :) I will get back to you as
        soon as possible.{" "}
      </div>
    </div>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);

  const form = useRef();
  const inputs = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(inputs.current);
    if (inputs.current.value === "") {
      alert("Please fill all the fields");
    } else {
      emailjs
        .sendForm(
          "gmail",
          "template_07gmp8r",
          form.current,
          "7toofrwECYH86nhJN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setResult(true);
    }
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div className="row forms">
      <div className="form col" xs={12}>
        <div className="titleForm"> Contact me </div>
        <form ref={form} onSubmit={sendEmail}>
          <input ref={inputs} type="text" name="user_name" placeholder="Name" />
          <br />
          <br />
          <input
            ref={inputs}
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <br />
          <br />
          <textarea
            ref={inputs}
            name="message"
            style={{ resize: "none" }}
            placeholder="Message"
          />
          <br />
          <br />
          <input type="submit" value="Send" className="sendButton" />
        </form>
      </div>
      <div className="col resScreen">{result ? <Result /> : null}</div>
    </div>
  );
};

export default Contact;

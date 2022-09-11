import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pndfwto",
        "template_xd81vrd",
        form.current,
        "GZOHIO_8at9pBHd4K"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // console.log("Successfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <h1 className="medium-font">Contact</h1>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <span className="flex-form">
            <label>Your Name</label>
            <input type="text" name="user_name" />
          </span>
          <br></br>
          <span className="flex-form">
            <label>Email id</label>
            <input type="email" name="user_email" />
          </span>
          <br></br>
          <span className="flex-form">
            <label>Your Message</label>
            <textarea name="message" />
          </span>
          <br></br>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

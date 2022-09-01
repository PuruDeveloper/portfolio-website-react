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
          <label>Your Name</label>
          <br></br>
          <input type="text" name="user_name" />
          <br></br>
          <label>Email id</label>
          <br></br>
          <input type="email" name="user_email" />
          <br></br>
          <label>Your Message</label>
          <br></br>
          <textarea name="message" />
          <br></br>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

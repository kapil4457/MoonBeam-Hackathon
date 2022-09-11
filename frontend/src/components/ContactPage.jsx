import React from "react";
import { useState } from "react";
import "../style.css";

const ContactPage = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  return (
    <>
      <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div class="info">
              <div class="information">
                <img src="img/location.png" class="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div class="information">
                <img src="img/email.png" class="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div class="information">
                <img src="img/phone.png" class="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input
                  type="text"
                  name="name"
                  class="input"
                  placeholder="Username"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="input-container">
                <input
                  type="email"
                  name="email"
                  class="input"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-container">
                <input
                  type="tel"
                  name="phone"
                  class="input"
                  placeholder="Phone"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="input-container textarea">
                <textarea
                  name="message"
                  class="input"
                  placeholder="Message"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

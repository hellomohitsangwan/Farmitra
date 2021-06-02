import React from "react";

const Test = () => {
  return (
    <section className="section-4" id="contact">
      <h1 class="section-heading">Contact</h1>
      <div class="form-container">
        {/* <img src="images/form-img.png" class="form-img">/ */}
        <form class="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          {/* <textarea placeholder="Your Message"></textarea> */}
          <input type="submit" value="Send" />
        </form>
      </div>
      <p class="copyright">
        Copyright &copy; CodeAndCreate All Rights Reserved
      </p>
    </section>
  );
};

export default Test;

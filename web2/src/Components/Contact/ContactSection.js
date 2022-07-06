import React, { useEffect } from "react";
import "./ContactSection.css";
import Footer from "./../Home/Footer/Footer"
export default function ContactSection() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js";
    script.async = true;

    document.body.appendChild(script);
    const script1 = document.createElement("script");
    script1.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
    script1.async = true;
    document.body.appendChild(script1);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script1);
    };
  }, []);
  return (
    <>
      <section class="contact pt-100 pb-100" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 mx-auto text-center">
              <div class="section-title mb-100">
                <p>Get In Touch</p>
                <h4>Contact Me</h4>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-8">
              <form action="#" class="contact-form">
                <div class="row">
                  <div class="col-xl-6">
                    <input type="text" placeholder="name" />
                  </div>
                  <div class="col-xl-6">
                    <input type="text" placeholder="email" />
                  </div>
                  <div class="col-xl-6">
                    <input type="text" placeholder="subject" />
                  </div>
                  <div class="col-xl-6">
                    <input type="text" placeholder="telephone" />
                  </div>
                  <div class="col-xl-12">
                    <textarea
                      placeholder="message"
                      cols="30"
                      rows="10"
                    ></textarea>
                    <input type="submit" value="send message" />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-4">
              <div class="single-contact">
                <i class="fa fa-map-marker"></i>
                <h5>Address</h5>
                <p>87 Tam Trinh, Hoang Mai District, Ha Noi, Viet Nam</p>
              </div>
              <div class="single-contact">
                <i class="fa fa-phone"></i>
                <h5>Phone</h5>
                <p>(+84) 946 550 089</p>
              </div>
              <div class="single-contact">
                <i class="fa fa-envelope"></i>
                <h5>Email</h5>
                <p>ngocnhathht@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
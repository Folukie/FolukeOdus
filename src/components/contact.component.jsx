import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Reveal from "react-reveal/Reveal";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyopzql");

  const [success, handleSuccess] = useState("");

  return (
    <section className="bg-lightDark h-screen pt-24 px-24 sm:px-2" id="contact">
      <Reveal effect="fadeInUp">
        <h2 className="text-primary text-5xl text-center py-8 sm:text-3xl">
          CONTACT
        </h2>
        <div className="space-y-10 my-16">
          <h2 className="text-3xl">
            Do you have an interesting project that requires my services? Please
            contact me and let&apos;s have a chat about what I can do for you.
          </h2>
          <h2 className="text-3xl">
            You can reach me out via email{" "}
            <span className="text-primary font-medium">
              <a href="mailto:odusanya.folukemi@gmail.com">
                odusanya.folukemi@gmail.com
              </a>
            </span>
            &nbsp; or a phone call
            <span className="text-primary font-medium">
              <a href="tel:+2348132693859"> +234 813 269 3859</a>
            </span>{" "}
          </h2>
          <p className="text-3xl">Looking forward to hearing from you!</p>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;

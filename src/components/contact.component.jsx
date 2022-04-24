import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Reveal from "react-reveal/Reveal";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyopzql");

  const [success, handleSuccess] = useState("");

  return (
    <section className="bg-lightDark h-screen pt-24 px-24 sm:px-2" id="contact">
      <Reveal effect="fadeInUp">
        <h2 className="text-primary text-5xl text-center py-8 sm:text-3xl">CONTACT</h2>

        <form className="px-24 py-8 grid gap-y-8 sm:px-2" onSubmit={handleSubmit}>
          <input
            placeholder="Your Name"
            id="name"
            type="text"
            name="name"
            className="h-14 rounded-md p-4 w-1/2 mx-auto sm:w-full"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            placeholder="Your Email"
            id="email"
            type="email"
            name="email"
            className="h-14 rounded-md p-4 w-1/2 mx-auto sm:w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            className="h-60 rounded-md p-4 w-1/2 mx-auto sm:w-full"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {state.succeeded ? (
            <p className="text-success w-1/2 mx-auto sm:w-full">
              Message Sent Successfully!
            </p>
          ) : (
            ""
          )}
          <button
            className="w-60 mx-auto bg-primary border-primary border-2 rounded-full text-black px-10 py-4 text-xl cursor-pointer uppercase hover:opacity-60 transition-all"
            disabled={state.submitting}
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;

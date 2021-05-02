import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useFormHook";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Button from "../../elements/Button/Button";
import Error from "../../elements/Error/Error";
import checkForm from "../../validation/contactValidation";
import emailjs from "emailjs-com";
import useToggle from "../../hooks/useToggleHook";
import "./Contact.css";
import Confirmation from "./Confirmation/Confirmation";

const contactForm = {
  name: "",
  email: "",
  message: "",
};

function Contact(props) {
  const [contact, handleChange] = useForm(contactForm);
  const [errors, setErrors] = useState({});
  const [submit, isSubmitting] = useToggle(false);

  useEffect(() => {
    if (submit) {
      isSubmitting();
      if (Object.keys(errors).length === 0) {
        sendEmail();
      }
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(checkForm(contact));
    isSubmitting();
  };

  const sendEmail = () => {
    emailjs
      .send(
        "default_service",
        "template_7mnmar9",
        contact,
        "user_weNl6nmdoyl7uIQkz6WIW"
      )
      .then(
        (response) => {
          props.history.push("/Confirmation");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setErrors({
            fail: "Server seems to have stalled. Please try it again.",
          });
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <form className="Contact" onSubmit={handleSubmit}>
      <h1>Let's get in Touch</h1>
      <Input
        colorScheme="dark"
        label="Name"
        name="name"
        value={contact.name}
        handleChange={handleChange}
      />
      {errors.name && <Error error={errors.name} />}
      <Input
        colorScheme="dark"
        label="E-mail"
        name="email"
        value={contact.email}
        handleChange={handleChange}
      />
      {errors.email && <Error error={errors.email} />}
      <Textarea
        label="Message"
        name="message"
        value={contact.message}
        handleChange={handleChange}
      />
      {errors.message && <Error error={errors.message} />}
      <Button type="submit" name="Submit" />
      {errors.fail && <Error error={errors.fail} />}
    </form>
  );
}

export default Contact;

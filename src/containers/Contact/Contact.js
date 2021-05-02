import React from "react";
import "./Contact.css";
import Nav from "../../components/Nav/Nav";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Button from "../../elements/Button/Button";

function Contact(props) {
  return (
    <div className="App">
      <Nav />
      <form className="Contact">
        <Input colorScheme="dark" label="Name" />
        <Input colorScheme="dark" label="E-mail" />
        <Textarea label="Message" />
        <Button type="submit" name="Submit" />
      </form>
    </div>
  );
}

export default Contact;

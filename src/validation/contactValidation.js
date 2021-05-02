// logic to check registration form
export default (values) => {
    let errors = {};
  
    // fullName
    if (!values.name.trim()) {
      errors.name = "Name required";
    }
   
    // message
    if (!values.message.trim()) {
        errors.message = "Message required";
      }

    // email
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    return errors;
  };
  
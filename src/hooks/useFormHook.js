import { useState } from "react";

export default function (initState) {
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return [state, handleChange];
}

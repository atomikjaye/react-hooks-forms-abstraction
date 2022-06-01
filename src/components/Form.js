import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry"
  });

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value
    // setFirstName(event.target.value);
    if (event.target.type === 'checkbox') {
      value = event.target.checked
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }



  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

import React from "react";

function Form({ firstName, lastName, admin, handleChange, handleSubmit }) {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange}/>
      <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange}/>
      <input type="checkbox" name="admin" placeholder="admin" checked={admin} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

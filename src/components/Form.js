import React from "react";

function Form({ firstName, lastName, handleFirstName, handleLastName }) {

  return (
    <form>
      <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstName}/>
      <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastName}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

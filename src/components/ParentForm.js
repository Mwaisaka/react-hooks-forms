import React, { useState } from "react";
import ChildForm from "./ChildForm";


function ParentForm() {
  const [firstName, setFirstName] = useState("Frank");
  const [lastName, setLastName] = useState("Mwaisaka");
  const [newsletter, setNewsletter] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleNewsLetterChange(event){
    setNewsletter(event.target.checked);
  }

  function handleSubmitEvent(event){
    alert("The following name has been submitted : " +firstName + " " + lastName);
    event.preventDefault();
  }
    return (
      <div>
      <ChildForm handleSubmitEvent={handleSubmitEvent}
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        newsletter={newsletter}
        handleNewsLetterChange={handleNewsLetterChange}
      />
      </div>
    );
  
}

export default ParentForm;

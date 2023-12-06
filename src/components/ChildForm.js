import React from "react";

function ChildForm(props) {

  return (
    <form onSubmit={props.handleSubmitEvent}>
      <input
        type="text"
        id="firstName"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        id="lastName"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
      <br />
      <br />
      <br />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input 
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsLetterChange}
        checked={props.newsletter}
      />
      <button type="submit">Submit</button>
      <br/>
      <br/>
      <br/>
      <label>User Comments:</label>
      <textarea placeholder="Enter comments here.."/>
      <br/>
      <br/>
      <br/>
      <label style={{color : "blue", background : "yellow", fontSize : "20px"}}>Select Fruit:</label>
      <select style={{width : "150px", height:"40px"}}>
        <option value="select">Select</option>
        <option value="grapes">Grapes</option>
        <option value="mangoes">Mangoes</option>
        <option value="lemons">Lemons</option>
      </select>
    </form>
  );
}

export default ChildForm;

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

import React, { useState } from "react";

const App = () => {
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  return (
    <>
      <div className="conatiner">
        <h1>
          Hi {details.fName} {details.lName}
        </h1>
        <p>{details.email}</p>
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Firstname"
            name="fName"
            value={details.fName}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Lastname"
            name="lName"
            value={details.lName}
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={details.email}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;

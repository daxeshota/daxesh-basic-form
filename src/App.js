import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [genError, setGenError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 4) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (age < 18 || age > 40) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    const genderrr = document.querySelector('input[name="gender"]:checked');

    if (genderrr == null) {
      setGenError(true);
    } else {
      setGenError(false);
    }
    setGender(genderrr.value);

    const selectElement = document.querySelector("#select1");
    const output = selectElement.value;
    setRole(output);
    setShow(true);
  };

  const handleclick = () => {
    const checkbox = document.getElementById("chkbox");
    checkbox.checked ? setSubmit(true) : setSubmit(false);
  };

  return (
    <>
      <h1 className="text-center m-5">Basic Form</h1>
      <div className="container w-50">
        <form
          className="text-start bg-light p-5 rounded-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          Name :-
          <input
            className="m-2 rounded p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
          />
          {nameError && (
            <span className="m-5 text-danger">Please enter valid name</span>
          )}
          <br />
          Age :-
          <input
            className="m-2 rounded p-1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            name="age"
          />
          {ageError && (
            <span className="m-5 text-danger">Please enter valid Age</span>
          )}
          <br />
          Gender :-
          <label className="m-2" htmlFor="gender">
            Male
          </label>
          <input type="radio" name="gender" value="male" />
          <label className="m-2" htmlFor="gender">
            Female
          </label>
          <input type="radio" name="gender" value="female" />
          {genError && (
            <span className="m-5 text-danger">Please select your gender</span>
          )}
          <br />
          <label className="m-2"> Role :- </label>
          <select id="select1">
            <option value="PHP"> PHP</option>
            <option value="Java"> Java</option>
            <option value="QA"> QA</option>
            <option value="Network"> Network</option>
          </select>
          <br />
          <input
            type="checkbox"
            id="chkbox"
            className="m-2"
            onClick={handleclick}
          />
          I accept the terms & conditions <br />
          {submit ? (
            <input className="m-3" type="submit" value="Submit" />
          ) : (
            <input className="m-3" disabled type="submit" value="Submit" />
          )}
        </form>
      </div>
      {show && (
        <div className="container w-50 mt-5 text-center">
          {!nameError && !ageError && !genError && (
            <>
              <div className="card text-center" >
              <div className="card-footer">Successfully submited</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name : {name}</li>
                  <li className="list-group-item">Age : {age}</li>
                  <li className="list-group-item">Gender : {gender}</li>
                  <li className="list-group-item">Role : {role}</li>
                </ul>
                
              </div>
              {/* <p> Name : {name}</p>
              <p>Age : {age}</p>
              <p>Gender : {gender}</p>
              <p>Role : {role}</p> */}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;

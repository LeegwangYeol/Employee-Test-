import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import { creatEmployee } from "../Service/EmployeeService";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");

  const Navigator = useNavigate();

  const [errors, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //   function handleFirstName(e) {
  //     setFirstName(e.target.value);
  //   }

  //   function handleLastName(e) {
  //     setLasttName(e.target.value);
  //   }

  //   function handleEmail(e) {
  //     setEmail(e.target.value);
  //   }

  function validationForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "first name requird";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "last Name requird";
      valid = false;
    }
    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "email requird";
      valid = false;
    }

    setError(errorCopy);
    return valid;
  }

  function saveEmployee(e) {
    e.preventDefault();

    if (validationForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      creatEmployee(employee).then((response) => {
        console.log(response.data);

        Navigator("/employees");
      });
    }
  }

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add employees</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Fisrt Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  } `}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  } `}
                  onChange={(e) => setLasttName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="password"
                  placeholder="Enter Employee email"
                  name="email"
                  value={email}
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  } `}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button
                class="btn btn-primary"
                type="button"
                onClick={saveEmployee}
              >
                Save New Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;

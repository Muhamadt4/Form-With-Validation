import React, { useState } from "react";
import Forminput from "./Forminput";
export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "Text",
      placeholder: "Username",
      label: "User Name",
      errormessage: "You should enter more than 6 characters",
      required: "true",
      pattern: ".{6,}",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "email",
      errormessage: "please enter a valid email",
      required: "true",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Date of birth",
      required: "true",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "password",
      errormessage:
        "You should enter at least 8 characters ,one capital letter .one small letter ,one number , one symbol  ",
      required: "true",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm Password",
      label: "confirm Password",
      errormessage: "the password does not match",
      required: "true",
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted , Check console for data")
    console.log(values)
  };

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="bg-gradient-to-br from-slate-400 to-slate-800 w-full h-screen flex justify-center items-center ">
    <div className="lg:w-1/3 w-[90%] bg-gray-700 rounded-lg shadow-lg transition-all duration-500">
    <div className="p-[3%] font-bold text-white border-b-2 border-slate-800 text-5xl">Register</div>    
    <form onSubmit={handleSubmit} className="w-full flex flex-col pt-4 ">
          {inputs.map((input) => (
            <Forminput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="my-5 bg-gray-400 w-1/2 mx-auto p-2 rounded-lg shadow-sm border-2 border-gray-200 hover:bg-gray-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import { FormInput } from "./components/FormInput";

function App() {
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
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and should't include any special character!",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage:"It should be a valid email address",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:"Password should nbe 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values)

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Resister</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            values={values}
            setValues={setValues}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

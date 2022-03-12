import { useEffect, useState } from "react";
import "./App.css";
import { FormInput } from "./components/FormInput";

function App() {
  const [userName, setUserName] = useState("");
  console.log(userName);
  const submitHandler = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    console.log('re-rendered');
  }, [])

  return (
    <div className="app">
      <form onSubmit={submitHandler} >
        <FormInput placeholder="Username" setUserName={setUserName} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Smt else" />
      </form>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import GradeForm from "./components/GradeForm";
import GradeTable from "./components/GradeTable";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const handelCallback = (input) => {
    console.log(input);
    setUserData([...userData, input]);
  };

  return (
    <section>
      <GradeForm handelCallback={handelCallback} />
      <GradeTable userData={userData} />
    </section>
  );
}

export default App;

import { useState } from "react";

function GradeForm(props) {
  const [input, setInput] = useState({
    id: "",
    firstname: "",
    lastname: "",
    grade: "",
  });

  const handelOnchange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    if (!input.firstname || !input.lastname || !input.grade) return;
    //console.log(input);
    const id = Math.floor(Math.random() * Date.now());
    console.log("id", id);
    input.id = id;
    props.handelCallback(input);
    setInput({
      id: "",
      firstname: "",
      lastname: "",
      grade: "",
    });
  };

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={input.firstname}
          onChange={handelOnchange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={input.lastname}
          onChange={handelOnchange}
        />

        <label>Grade</label>
        <input
          type="text"
          name="grade"
          value={input.grade}
          onChange={handelOnchange}
        />

        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default GradeForm;

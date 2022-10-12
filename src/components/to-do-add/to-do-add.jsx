import { useState, useEffect } from "react"; //useState and useEffect hooks used
import "./to-do.scss";

const initialValues = [];
//probs are setTasks and tasks
function TodoAdd({ setTasks, tasks }) {
  const [list, setList] = useState(initialValues);

  //useEffect hook allows to perform side effect on the tasks
  useEffect(() => {
    setList(initialValues);
  }, [tasks]);

  //to set the input value
  const onChangeInput = (e) => {
    setList([e.target.value]);
  };
  //ın order to press enter button
  const onSubmit = (e) => {
    e.preventDefault();
    if (list === []) {
      return false;
    }
    setTasks([...tasks, [list[0][0].toUpperCase() + list[0].slice(1)]]); //add last input to the list
    document.querySelector(".total").innerText = `Total Remaining Task (${
      document.querySelector(".list-group").childElementCount + 1
    }) and ${list[0][0].toUpperCase() + list[0].slice(1)} has just added.`;
  };
  //ın onrder to click add button
  const onClick = (e) => {
    e.preventDefault();
    if (list === []) {
      return false;
    }
    setTasks([...tasks, [list[0][0].toUpperCase() + list[0].slice(1)]]); //add last input to the list
    console.log(tasks);
    document.querySelector(".total").innerText = `Total Remaining Task (${
      document.querySelector(".list-group").childElementCount + 1
    }) and ${list[0][0].toUpperCase() + list[0].slice(1)} has just added.`;
  };

  return (
    // on submit event handler
    <form onSubmit={onSubmit} className="todo-add col-md-6 mx-auto">
      <div className="input-group mb-3 ">
        <input
          type="text"
          name="todo"
          id="todo-input"
          placeholder="Add New Todo..."
          onChange={onChangeInput}
          value={list}
          className="form-control"
        ></input>
        {/* on click event handler */}
        <button
          onClick={onClick}
          className="btn btn-outline-secondary"
          type="button"
          id="Add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoAdd;

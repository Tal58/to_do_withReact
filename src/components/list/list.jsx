import { useState } from "react";
import DeletedTask from "../deleted_tasks/Deleted_Tasks";
import CompletedTasks from "../completed_tasks/CompletedTasks";
let initialValue; // to check the removed list
let completedValue = []; //is used for keeping completed task as an array list
let counter = 0; //counter is used for the completed tasks
function List({ setTasks, tasks }) {
  const [filterText, setFilterText] = useState(""); //use state Hook to set the filtertext which is used for the list of the tasks
  //to filter the list according to the input value
  const filtered = tasks.filter((item) => {
    return item.some(() =>
      item.toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    );
  });
  //trash button
  const remove = (e) => {
    let value = e.target.parentElement.parentElement.innerText; //to set the value of li
    tasks = tasks.filter((item) => item[0] !== value); //remove the clicked value on tasks
    setTasks([...tasks]); //reset the tasks
    document.querySelector(
      ".total"
    ).innerText = `Total Remaining Task (${tasks.length}) and ${value} has just deleted.`; //to display the total remaining task  and deleted tasks
    initialValue = value; //to display the removed task list, we initialized initial value
    document.querySelector(".total").classList.add("red")//ın order to better notice by user the color of the text changes  
  };
  //check button
  const check = (e) => {
    let num = e.target.parentElement.parentElement.classList; //to check the li whether it has "checked" class name or not
    if (!num.contains("checked")) {
      //if it does not have "checked", that means it did not clicked before last click
      if (
        !completedValue.includes(e.target.parentElement.parentElement.innerText)
      ) {
        completedValue.push([e.target.parentElement.parentElement.innerText]);
      } //push the clicked value to the variable in order to display in completed task
      e.target.parentElement.parentElement.classList.add("checked"); //if it does not have add "checked" className
      counter++;
      counter <= 1
        ? (document.querySelector(
            ".completed"
          ).innerText = `You have completed ${counter}task.`)
        : (document.querySelector(
            ".completed"
          ).innerText = `You have completed ${counter} tasks.`); //ın order  to display completed result, ternary structure used
      document.querySelector(".completed").classList.add("red")//ın order to better notice by user the color of the text changes  
    } else {
      e.target.parentElement.parentElement.classList.remove("checked"); //if it has "checked" className it will remove and counter decrease
      completedValue = completedValue.filter(
        (item) => item != e.target.parentElement.parentElement.innerText
      );
      console.log(completedValue);
      counter--;
      if (counter ==0){//turn back to initial color 
        document.querySelector(".completed").classList.remove("red")
      }
      counter > 1
        ? (document.querySelector(
            ".completed"
          ).innerText = `You have completed ${counter} tasks.`)
        : counter === 1
        ? (document.querySelector(
            ".completed"
          ).innerText = `You have completed ${counter} task.`)
        : (document.querySelector(
            ".completed"
          ).innerText = `Completed Task (${counter})`);
    } //ın order  to display completed result, ternary structure used
    setTasks([...tasks]); //in order to initialize the whole list, reset tasks 
  };

  return (
    <div className="row combo-list gap-2">
      <div className="col-md-5 tasks">
        <div className="input-group mb-3">
          {/* In oerde to set the input value in filter text setFilterText method used  */}
          <input
            type="text"
            onChange={(e) => setFilterText(e.target.value)}
            className="form-control"
            value={filterText}
            placeholder="Please Write to Filter Your Tasks..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></input>
        </div>
        <ol className="list-group list-group-numbered">
          {" "}
          {/* Bootsrap ol structure used */}
          {filtered.map((task, i) => (
            <li key={i} className="list-group-item row" value={task}>
              <p className="task col">
                {task[0][0].toUpperCase() + task[0].slice(1)}
              </p>
              <div className="icons col">
                <i className="fa-solid fa-check " onClick={check}></i>
                <i className="fa-solid fa-trash-can" onClick={remove}></i>
              </div>
            </li>
          ))}
        </ol>
        {/* result */}
        <div className="result row">
          <hr></hr>
          <p className="total col">Total Task ({filtered.length})</p>
          <p className="completed col">Completed Task ({counter})</p>
          <hr></hr>
        </div>
      </div>
      <div className="combo col-md-5">
        <CompletedTasks completed={completedValue} />
        <DeletedTask deleted={initialValue} />
      </div>
    </div>
  );
}

export default List;

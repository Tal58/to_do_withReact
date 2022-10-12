import { useState, useEffect } from "react";
import TodoAdd from "../to-do-add/to-do-add";
import List from "../list/list";

function Combinator() {
  // default variables
  let [tasks, setTasks] = useState([
    ["React"],
    ["JavaScript"],
    ["Python"],
    ["HTML"],
    ["CSS"],
    ["Django"],
  ]);
  useEffect(() => {}, [tasks]);
  return (
    <div className="container col-md-10 ">
      <TodoAdd setTasks={setTasks} tasks={tasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Combinator;

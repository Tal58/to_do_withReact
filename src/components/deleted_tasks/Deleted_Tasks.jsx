import "./deleted_tasks.scss"
let deletedList = [];
function DeletedTask({deleted}) {
  if (deleted !== undefined) { //if its not undefined it displays the tasks
    if (!deletedList.includes(deleted)) {
      deletedList.push(deleted);
    }
    return (
      <div>
        <h2>Deleted Task List</h2>
        {/* Bootsrap ul structure used */}
        <ul className="list-group">
          {deletedList.map((task, i) => (
            <li key={i} className="list-group-item row">
             {i+1}.{task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DeletedTask;

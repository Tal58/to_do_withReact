
function CompletedTasks({completed}) { 
  if (completed.length>0) {
    return (
      <div>
        <h2>Completed Task List</h2>
        {/* Bootsrap ul structure used */}
        <ul className="list-group">
          {completed.map((task, i) => (
            <li key={i} className="list-group-item row">
             {i+1}.{task}
            </li>
          ))}
        </ul>
      </div>
    );
  }}
  


export default CompletedTasks;
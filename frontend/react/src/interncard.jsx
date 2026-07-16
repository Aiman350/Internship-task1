import { useState, useEffect } from "react";

function InternCard() {
  const [intern, setIntern] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/intern")
    .then((response) => response.json())
    .then((data) => {
      setIntern(data);
    });

  fetch("http://localhost:5000/api/tasks")
    .then((response) => response.json())
    .then((data) => {
      setTasks(data.tasks);
    });

}, []);

  if (intern === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>Intern Information</h3>

      <p><strong>Intern Name:</strong> {intern.name}</p>

      <p><strong>Domain:</strong> {intern.domain}</p>

      <p><strong>Batch:</strong> {intern.batch}</p>

      <p><strong>Supervisor:</strong> {intern.supervisor}</p>
      <h3>Internship Tasks</h3>

<ul>
  {tasks.map((task, index) => (
    <li key={index}>{task}</li>
  ))}
</ul>
<button>View Details</button>
    </div>
  );
}

export default InternCard;
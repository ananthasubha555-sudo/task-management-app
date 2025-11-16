import { Link } from "react-router-dom";

export default function TaskTable({ tasks, deleteTask }) {
  return (
    <table border="3" width="100%" style={{ borderCollapse: "collapse", border: "3px solid black", overflow: "auto", maxWidth: "100%" }}>
      <thead style={{border: "3px solid black"}}>
        <tr>
          <th style={{ border: "34495e", padding: "8px",backgroundColor:"#34495e", color:'white' }}>Title</th>
          <th style={{ border: "34495e", padding: "8px",backgroundColor:"#34495e", color:'white' }}>Description</th>
          <th style={{ border: "34495e", padding: "8px",backgroundColor:"#34495e", color:'white' }}>Priority</th>
          <th style={{ border: "34495e", padding: "8px",backgroundColor:"#34495e", color:'white' }}>Status</th>
          <th style={{ border: "34495e", padding: "8px",backgroundColor:"#34495e", color:'white' }}>Actions</th>
        </tr>
      </thead>

      <tbody >
        {tasks.map((task) => (
          <tr key={task.id} >
            <td style={{ border: "2px solid black", padding: "8px" }}>{task.title}</td>
            <td style={{ border: "2px solid black", padding: "8px" }}>{task.description}</td>
            <td style={{ border: "2px solid black", padding: "8px" }}>{task.priority}</td>
            <td style={{ border: "2px solid black", padding: "8px" }}>{task.status}</td>
            <td style={{ border: "2px solid black", padding: "8px" }}>
              <Link to={`/edit/${task.id}`} style={{backgroundColor: "green", padding: "6px", borderRadius: "6px", color:"whitesmoke", textDecoration:"none"}}>Edit</Link> |{" "}
              <button onClick={() => deleteTask(task.id)} style={{backgroundColor:"red", color:"whitesmoke", padding:"6px", border:"none", cursor:"pointer", borderRadius: "6px"}}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

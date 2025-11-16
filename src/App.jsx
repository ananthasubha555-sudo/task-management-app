import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

export default function App() {
  return (
    
    <div>
      <div style={{display:"flex", justifyContent: "space-between", padding: "20px", backgroundColor:"grey", marginBottom: "2px", overflow: "auto"}}>
        <h1>Task Management</h1>
      
      <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <Link to="/" style={{backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "6px"}}>Home</Link>
        <Link to="/create" style={{backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "6px"}}>Create Task</Link>
      </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
}

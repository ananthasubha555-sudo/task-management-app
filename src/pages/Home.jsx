import { useEffect, useState } from "react";
import TaskTable from "../components/TaskTable";
import Pagination from "../components/Pagination";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // NEW FILTER STATES
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // 👉 SEARCH + STATUS + PRIORITY FILTER
  const filtered = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Pagination
  const lastIndex = currentPage * tasksPerPage;
  const firstIndex = lastIndex - tasksPerPage;
  const currentTasks = filtered.slice(firstIndex, lastIndex);

  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "azure",
        boxShadow: "0 2px 4px #0000001a",
        margin: "20px",
      }}
    >
      <h2>All Tasks</h2>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "5px",
          width: "80%",
          border: "solid 1px gray",
          borderRadius: "6px",
        }}
      />

      {/* STATUS + PRIORITY FILTERS */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "6px", border: "solid 1px gray",
          borderRadius: "6px", }}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          style={{ padding: "6px", border: "solid 1px gray",
          borderRadius: "6px", }}
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* TASK TABLE */}
      <TaskTable tasks={currentTasks} deleteTask={deleteTask} />

      {/* PAGINATION */}
      <Pagination
        total={filtered.length}
        perPage={tasksPerPage}
        current={currentPage}
        setCurrent={setCurrentPage}
      />
    </div>
  );
}

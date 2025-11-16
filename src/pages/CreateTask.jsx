import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const navigate = useNavigate();

  const { form, handleChange, resetForm } = useForm({
    title: "",
    description: "",
    priority: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      ...form,
    };

    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(saved));

    resetForm();
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#8fffd1",
      padding: "50px",
      margin: "50px"
    }}>
      <h2>Create Task</h2>
      <TaskForm
        form={form}
        handleChange={handleChange}
        submitText="Create"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

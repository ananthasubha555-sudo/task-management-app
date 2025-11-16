import { useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";
import { useEffect } from "react";

export default function EditTask() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { form, handleChange, resetForm, setValues } = useForm({
  title: "",
  description: "",
  priority: "",
});


 useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  const found = saved.find((t) => t.id == id);

  if (found) {
    setValues(found);   // 👈 correctly set form values
  }
}, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated = saved.map((t) => (t.id == id ? { ...t, ...form } : t));
    localStorage.setItem("tasks", JSON.stringify(updated));

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
      <h2 style={{ marginBottom: "20px"}}>Edit Task</h2>
      <TaskForm
        form={form}
        handleChange={handleChange}
        submitText="Update"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default function TaskForm({ form, handleChange, submitText, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width:"400px", maxWidth: "100%"}}>
    <h3 style={{marginBottom: "2px"}}>Title:</h3>
      <input className="input-box" style={{padding: "12px", border: "1px solid gray", borderRadius: "6px"}}
        type="text"
        name="title"
        placeholder="Task Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <h3 style={{marginTop: "10px", marginBottom: "2px"}}>Description:</h3>
      <textarea className="input-box" style={{padding: "12px", border: "1px solid gray", borderRadius: "6px"}}
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <h3 style={{marginTop: "10px", marginBottom: "2px"}}>Priority:</h3>
      <select name="priority" value={form.priority} onChange={handleChange} style={{padding: "10px", border: "1px solid gray", borderRadius: "6px"}}>
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <h3 style={{marginTop: "10px", marginBottom: "2px"}}>Status:</h3>
      <select name="status" value={form.status} onChange={handleChange} style={{padding: "10px", border: "1px solid gray", borderRadius: "6px"}}>
        <option value="All">All Status</option>
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
      </select>

      <button style={{width: "100px",backgroundColor: "gray", padding: "6px",border: "none", borderRadius: "6px", cursor: "pointer"}} type="submit">{submitText}</button>
    </form>
  );
}

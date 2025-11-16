import { useState } from "react";

export default function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setValues = (newValues) => {
    setForm(newValues);   // 👈 this is important
  };

  const resetForm = () => setForm(initialValues);

  return { form, handleChange, resetForm, setValues };
}

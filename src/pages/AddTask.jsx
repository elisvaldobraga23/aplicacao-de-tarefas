import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);

    navigate("/");
  }

  return (
    <div className="container">
      <h1>Adicionar Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
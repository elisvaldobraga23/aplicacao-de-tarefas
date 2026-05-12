import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

export default function Home() {
  const { tasks, removeTask, editTask } =
    useContext(TaskContext);

  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  function handleEdit(task) {
    setEditingId(task.id);
    setNewTitle(task.title);
  }

  function saveEdit(id) {
    editTask(id, newTitle);
    setEditingId(null);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <Link to="/add-task">
        <button>Adicionar Tarefa</button>
      </Link>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) =>
                      setNewTitle(e.target.value)
                    }
                  />

                  <button onClick={() => saveEdit(task.id)}>
                    Salvar
                  </button>
                </>
              ) : (
                <>
                  <span>{task.title}</span>

                  <button onClick={() => handleEdit(task)}>
                    Editar
                  </button>

                  <button onClick={() => removeTask(task.id)}>
                    Excluir
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
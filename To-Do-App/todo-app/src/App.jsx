import { useState } from "react";

function App() {
  // Estado para lista de Tarefas
  const [task, setTask] = useState([]);

  // Texto do input
  const [text, setText] = useState("");

  // Função de adicionar
  const addTask = () => {
    if (text.trim() === "") {
      return;

      const newTask = {
        id: Date.now, // id único para cada tarefa
        texto: text, // texto da tarefa
        concluida: false, // status da tarefa
      };

      setTask((previousTask) => [...previousTask, newTask]);
      setText("");
    }
  }

  return (
    <div>
      <h1>Lista de tarefas: </h1>
      <input type="text" value={text} onChange={(e) => setTask(e.target.value)} />
      <button>Adicionar</button>
    </div>
  );
}
export default App

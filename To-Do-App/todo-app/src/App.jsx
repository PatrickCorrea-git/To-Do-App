import { useState } from "react"

function App() {

  // Estado para as tarefas
  const [task, setTask] = useState([]);

  // Estado para o texto
  const [text, setText] = useState("");

  // Função chamada ao clicar no botão
  const addTask = () => {
    if (text.trim() === "")
      return;

    const newTask = {
      id: Date.now(), // id único para cada tarefa
      texto: text, // texto da tarefa
      concluida: false, // status
    };

    setTask((previousTasks) => [...previousTasks, newTask]);
    setText("");
  }

  return (
    <div>
      <h1>Lista de Tarefas: </h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Adicionar: </button>
      <ul>
        {task.map((taskItem) => (
          <li key={taskItem.id}>{taskItem.texto}</li>
        ))}
      </ul>
    </div>
  );
}
export default App

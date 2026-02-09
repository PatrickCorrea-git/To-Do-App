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
  }
    const newTask = {
      id: Date.now(), // id único para cada tarefa
      texto: text, // texto da tarefa
      concluida: false, // status da tarefa
    };

    setTask((previousTask) => [...previousTask, newTask]);
    setText("");
  }

  // Função para alterar concluída 
  const toggleConcluida = (id) => {
    const novasTarefas = task.map((tarefa) => {
      if(tarefa.id === id) {
        return {...tarefa, concluida: !tarefa.concluida};
      }
      return tarefa;
    });

    setTask(novasTarefas);
  }

return (
  <div>
    <h1>Lista de tarefas: </h1>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={addTask}>Adicionar</button>
    <ul>
      {task.map((taskItem) => (
        <li key={taskItem.id}>{taskItem.texto}</li>
      ))}
    </ul>
  </div>
);
}
export default App







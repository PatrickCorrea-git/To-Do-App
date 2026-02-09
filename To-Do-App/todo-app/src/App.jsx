import { useState } from "react";
import TaskItem from "./TaskItem";

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
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });

    setTask(novasTarefas);
  }

  // Função remover
  const removerTarefa = (id) => {
    const novasTarefas = task.filter((tarefa) => tarefa.id !== id)
    setTask(novasTarefas);
  }

  return (
    <div>
      <h1>Lista de tarefas: </h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {task.map((taskItem) => (
          <TaskItem
            key={taskItem.id}
            task={taskItem}   // envia os dados da tarefa
            onToggle={toggleConcluida}  // envia a função de alternar concluída
            onRemove={removerTarefa}  // envia a função de remover
          />
        ))}
      </ul>
    </div>
  );
}
export default App







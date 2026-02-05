import { useState } from "react";

function App() {
  // Estado para lista de Tarefas
  const [task, setTask] = useState([]);

  // Texto do input
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Lista de tarefas: </h1>
      <input type="text" value={text} onChange={(e) => setTask(e.target.value)}/>
      <button>Adicionar</button>
    </div>
  );
}
export default App

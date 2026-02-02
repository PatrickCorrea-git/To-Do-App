import { useState } from "react"

function App() {

  const [task, setTask ] = useState("");

  return (
    <div>
      <h1>Lista de Tarefas: </h1>
      <input type="text" />
      <button>Adicionar: </button>
    </div>
  )
}

export default App

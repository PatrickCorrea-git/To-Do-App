import { useState } from "react"

function App() {

  // UseState
  const [task, setTask ] = useState("");

  const [text, setText] = useState("");

  return (
    <div>
      <h1>Lista de Tarefas: </h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button>Adicionar: </button>
    </div>
  )
}

export default App

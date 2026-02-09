import React from 'react'

const TaskItem = ({task, onToggle, onRemove}) => {

  return (
    <li>
        <span onClick={() => onToggle(task.id)}>{task.texto}</span>
        <button onClick={() => onRemove(task.id)}>Remover</button>
    </li>
  )
}

export default TaskItem
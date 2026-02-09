import React from 'react'

const TaskItem = ({task}) => {
  return (
    <li>{task.texto}</li>
  )
}

export default TaskItem
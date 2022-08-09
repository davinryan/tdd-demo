import React from 'react'
import {Task} from './Todo.types'
import './Todo.css'

interface TodoProps {
  task: Task
  onDelete: (index: number) => void
  index: number
}

const Todo = (props: TodoProps) => (
  <div className="to-do">
    <>
      {props.task.task}
      <i className="fas fa-minus-circle right" onClick={() => props.onDelete(props.index)}>Delete</i>
    </>
  </div>
)

export default Todo
import React from 'react'
import {Task} from './Todo.types'
import './Todo.css'

interface TodoProps {
  task: Task
  onDelete: (index: number) => void
  index: number
}

const Todo = (props: TodoProps) => (
  <div className='todo'>
    <>
      <span className='todoDescription'>{props.task.description}</span>
      <i className='todoDeleteButton right' onClick={() => props.onDelete(props.index)}>Delete</i>
    </>
  </div>
)

export default Todo
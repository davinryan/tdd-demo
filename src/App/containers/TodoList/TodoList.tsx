import React from 'react'
import Todo from '../../components/Todo/Todo'
import {Task} from '../../components/Todo/Todo.types'
import './TodoList.css'

interface TodoListProps {
  tasks: Task[]
  onDelete: (index: number) => void
}

const TodoList = (props: TodoListProps) => {
  const toDoList = props.tasks.map(task => (
    <Todo key={task.id} task={task} index={task.id} onDelete={props.onDelete}/>
  ))

  console.log(toDoList)

  return (
    <div className="toDoList">
      {toDoList}
    </div>
  )
}

export default TodoList
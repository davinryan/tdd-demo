import React from 'react'
import Todo from '../toDo/Todo'
import {Task} from '../toDo/todo.types'
import './toDoList.css'

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
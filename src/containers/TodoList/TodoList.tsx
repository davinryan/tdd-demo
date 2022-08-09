import React from 'react'
import './TodoList.css'

interface TodoListProps {
  tasks: any[]
  onDelete: (index: number) => void
}

const TodoList = (props: TodoListProps) => {


  return (
    <div className="todoList">

    </div>
  )
}

export default TodoList
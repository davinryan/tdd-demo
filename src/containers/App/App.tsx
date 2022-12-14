import React, {Component, FormEvent} from 'react'
import TaskIndicator from '../../components/TaskIndicator/TaskIndicator'
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm'
import TodoList from '../TodoList/TodoList'
import {Task} from '../../components/Todo/Todo.types'

import './App.css'

interface AppProps {

}

interface AppState {
  tasks: Task[]
  input: string
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      tasks: [],

      input: ''
    }
  }

  handleChange = (e: FormEvent) => {
    this.setState({...this.state, input: (e.target as any).value})
  }

  handleSubmit = (e: FormEvent) => {
    let list
    e.preventDefault()
    if (this.state.input === '') {
      return
    } else {
      list = {description: this.state.input, id: this.state.tasks.length + 1}
    }


    this.setState({tasks: [...this.state.tasks, list], input: ''})
    const form: HTMLFormElement = document.getElementById('myForm') as HTMLFormElement
    form.reset()
  }

  handleDelete = (index: number) => {
    const filteredList = this.state.tasks.filter(list => {
      return list.id !== index
    })
    this.setState({...this.state, tasks: filteredList})
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>

        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>

        <TaskIndicator number={this.state.tasks.length}/>
      </div>
    )
  }
}

export default App
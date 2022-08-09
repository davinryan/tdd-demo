import React, {FormEventHandler} from 'react'

import './AddTodoForm.css'

interface InputFormProps {
  onSubmit: FormEventHandler | undefined
  onChange: FormEventHandler | undefined
}

const AddTodoForm = (props: InputFormProps) => {
  return (
    <div className="addTodoForm">
      <form onSubmit={props.onSubmit} id="myForm">
        <input className="todoDescription"
               type="text"
               placeholder="Add to-do"
               onChange={props.onChange}
        />
        <button className="todoAdd">Add</button>
      </form>
    </div>
  )
}


export default AddTodoForm
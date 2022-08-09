import React, {FormEventHandler} from 'react'

import './AddTodoForm.css'

interface InputFormProps {
  onSubmit: FormEventHandler | undefined
  onChange: FormEventHandler | undefined
}

const AddTodoForm = (props: InputFormProps) => {
  return (
    <div className="input-form">
      <form onSubmit={props.onSubmit} id="myForm">
        <input className="input"
               type="text"
               placeholder="Add to-do"
               onChange={props.onChange}
        />
        <button className="fas fa-plus-circle add">Add</button>
      </form>
    </div>
  )
}


export default AddTodoForm
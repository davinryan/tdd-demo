import React from 'react'

import './taskIndicator.css'

interface TaskIndicatorProps {
  number: number
}

const TaskIndicator = (props: TaskIndicatorProps) => {
  return (
    <div className="header">
      <h3>{`You have  
            ${props.number}  
            ${props.number === 1 ? ' task' : ' tasks'}`}
      </h3>
    </div>
  )
}


export default TaskIndicator
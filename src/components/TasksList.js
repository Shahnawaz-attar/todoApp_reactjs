import React from 'react'

const TasksList = (props) => {
    return (

       <>
        <div className="col-lg-8 offset-1  ">
            <div className="alert alert-success  fade show" role="alert">
                <strong>{props.task}</strong>   
            
            </div>

        </div>
        <div className='col-lg-2 '>
            <button type='button' className='btn btn-danger mt-2' onClick={() => props.deleteTask(props.index)}>Delete</button>
            
        </div>
       </>




    )
}

export default TasksList
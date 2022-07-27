import React, { useEffect, useState } from 'react'
import TasksList from './TasksList';

const AddTasks = () => {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([ ]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // save to local storage

        setTasks([...tasks, task]);
        setTask('');
        
    }

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        localStorage.removeItem(index);
    }

    // load from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            setTasks(tasks);
        }
    }

    useEffect(() => {
        loadTasks();
    }
    , [])




    return (
        <>
        <form>
            <div className='row mt-5'>
                <div className='col-lg-8 offset-1 '>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Enter Task' name="task" value={task} onChange={handleChange}/>
                    </div>
                </div>
                <div className='col-lg-2 '>

                {/* set disable if no val */}
                <button type='submit' className='btn btn-primary mt-2' disabled={!task} onClick={handleSubmit}>Add</button>
                </div>


            </div>
        </form>

        <div className='row mt-5'>
        {
            tasks.map((task, index) => {
                localStorage.setItem('tasks', JSON.stringify(tasks));
                return <TasksList   task={task} key={index} index={index} deleteTask={deleteTask} />
            } )
        }

        </div>

        
</>

    )
}

export default AddTasks
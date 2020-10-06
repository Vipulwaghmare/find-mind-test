import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux';
import { ADD_TASK } from '../Reducer/action';
import Incompleted from './Incomplete';
import Completed from './Complete';


const Tasks = (props) => {
    const [values, setValues] = useState({
        task: '',
        addTask : props.taskcount > 0 ? false : true
    })

    const { task, addTask} = values

    const dispatch = useDispatch()

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const submitTask = e => {
        e.preventDefault()
        if(task){
            dispatch({ 
                type: ADD_TASK, 
                payload: {task: task}
            })
        }
        setValues({ 
            ...values, 
            task: '', 
            addTask : false
        })
    }

    return (
        <main>
            <div className="task-main">
                <div className="task-title">
                    <h5 className="task-title-h5">
                    My Tasks
                    </h5>
                    <div className="tast-title-options">
                    <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                {addTask ||
                    <form className="task-section-new">
                    <button
                    className="task-add-button-left"
                    onClick={submitTask}
                >
                <i className="fas fa-plus"></i>
                </button>
                <input 
                    className="task-input-left"
                    type="text" 
                    value={task}
                    name="task"
                    placeholder="Add a Task"
                    onChange={handleChange} 
                />
                </form>
                }
                {addTask && 
                    <form className="task-section">
                <input 
                    className="task-input"
                    type="text" 
                    value={task}
                    name="task"
                    placeholder="Add a Task"
                    onChange={handleChange} 
                />
                <button
                    className="task-add-button"
                    onClick={submitTask}
                >
                <i className="fas fa-plus"></i>
                </button>
            </form>}
                
                <div>
                    {props.allTasks.map(tk=> (
                        <Incompleted
                            key={tk.name}
                            name={tk.name} 
                            status={tk.status}
                            showDetails={tk.showDetails}
                            details={tk.details}
                            date={tk.date}
                        />
                    ))}
                </div>
                {props.completeTaskCount ? 
                    <h5 className="completed-h5">
                        Completed ({props.completeTaskCount})
                    </h5> : null
                }
                <div >
                {props.allTasks.map(tk=> (
                    <Completed
                        key={tk.name}
                        name={tk.name} 
                        status={tk.status}
                    />
                ))}
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Tasks)
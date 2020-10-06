import React from 'react'
import {connect, useDispatch} from 'react-redux'
import { COMPLETE_TASK, EDIT_TASK, SHOW_DETAILS } from '../Reducer/action'
import EditTask from './EditTask'

const Incompleted = (props) => {

    const dispatch = useDispatch()

    const editingTask = () => {
        dispatch({
            type: EDIT_TASK,
            payload:{
                name: props.name
            }
        })
    }

    const showDetails = () => {
        dispatch({
            type: SHOW_DETAILS,
            payload: {
                name: props.name
            }
        })
    }

    const Details = () => {
        return (
            props.showDetails && 
            <div
                className="task-details"
            > {props.details}  
            <p className="task-date">{props.date[0]}/{props.date[1]}/{props.date[2]}</p>
            </div>
        )
    }

    const completeTask = e => {
        e.preventDefault()
        dispatch({
            type: COMPLETE_TASK,
            payload:{
                name: props.name
            }
        })
    }
    
    return(
        props.status ||
        <div className="incomplete-tasks">
                {props.allTasks.map(tk => (
                <EditTask 
                    key= {tk.name}
                    name={tk.name}
                    details= {tk.details}
                    date= {tk.date}
                    edit={tk.edit}
                />
                 ))}
                <div>
                <button 
                    className="incomplete-check"
                    onClick={completeTask}
                    >
                o
                </button>
                </div>
                <div className="incomplete-right">
                <div className="incomplete-right-top">
                <div>
                <button className="incomplete-name"
                    onClick={showDetails}    
                >
                {props.name}
                </button>
                </div>
                    <div>
                <button 
                    className="incomplete-edit"
                    onClick={editingTask}
                    >
                    <i className="fas fa-pen"></i>
                </button>
                </div>
                </div>
                    <div className="incomplete-right-bottom">
                <Details />

                    </div>
                </div>
            

            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Incompleted)
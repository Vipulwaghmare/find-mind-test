import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {  CANCEL_EDIT, DELETE_TASK, ADD_DETAILS } from '../Reducer/action'

const EditTask = (props) => {

    const [details, setDetails ] = React.useState('')

    const dispatch = useDispatch()
    
    const handleChange = e => {
        setDetails(e.target.value)
    }

    const cancelEdit= () =>{
        dispatch({
            type: ADD_DETAILS,
            payload: {
                name: props.name,
                details: details
            }
        })
        dispatch({
            type: CANCEL_EDIT,
            payload: {
                name: props.name
            }
        })
    }

    const deleteTask = () => {
        dispatch({
            type: DELETE_TASK,
            payload: {
                name: props.name
            }
        })  
    }

    return(
        props.edit && 
        <div className="edit-tasks-full">
            <div className="edit-tasks">
            <div className="edit-task-header">
            <button className="edit-top-buttons" onClick={deleteTask}> <i className="fas fa-trash"></i> </button>
            <button className="edit-top-buttons" onClick={cancelEdit}> <i className="fas fa-times"></i> </button>
            </div>
            <p className="edit-task-p"> 
            {props.name}
            </p>
            <input 
                className="edit-task-detail"
                placeholder="Add details"
                type="text"
                name="details"
                value={details}
                onChange={handleChange}
            />
            <p className="edit-task-p">Add date</p>
            <p className="edit-task-p"> Move to another list </p>
        </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(EditTask)
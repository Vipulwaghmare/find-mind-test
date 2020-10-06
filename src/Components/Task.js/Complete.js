import React from 'react'

const Completed = (props) => {
    return(
        props.status &&
        <div className="completed-tasks">
                <div
                    className="completed-tick"
                ></div>
                <span className="completed-task-name">
                {props.name}
                </span>
            </div>
    )
}

export default Completed
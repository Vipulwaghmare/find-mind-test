import { ADD_TASK, COMPLETE_TASK, EDIT_TASK, CANCEL_EDIT, DELETE_TASK, ADD_DETAILS, ADD_DATE, SHOW_DETAILS } from "./action"

const initState = {
    allTasks: [],
    task: '',
    taskcount: 0,
    completeTaskCount: 0
}

export const rootReducer = (state = initState, action) => {
    if(action.type ===  ADD_TASK){
        let day = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        let new_task = { 
            name: action.payload.task,
            details: '',
            date: [day, month, year],
            status: false,
            edit: false,
            showDetails: false 
        }
        state.allTasks.push(new_task)
        return {
            ...state,
            taskcount: state.taskcount + 1
        }
    }

    if(action.type === COMPLETE_TASK){
        let new_allTasks = state.allTasks.map(task => {
            if (task.name === action.payload.name){
                return {
                    ...task,
                    status: true,
                }
            } else {
                return task
            }
        })
        return {
            ...state,
            allTasks: new_allTasks,
            completeTaskCount: state.completeTaskCount + 1
        }
    }

    if(action.type === EDIT_TASK){
        let new_allTasks = state.allTasks.map(task => {
            if (task.name === action.payload.name){
                return {
                    ...task,
                    edit: true,
                }
            } else {
                return task
            }
        })
        return {
            ...state,
            allTasks: new_allTasks
        }
    }

    if(action.type === CANCEL_EDIT ){
        let new_allTasks = state.allTasks.map(task => {
            if (task.name === action.payload.name){
                return {
                    ...task,
                    edit: false,
                }
            } else {
                return task
            }
        })
        return {
            ...state,
            allTasks: new_allTasks
        }
    }

    if(action.type === DELETE_TASK){
        let index = state.allTasks.findIndex( x=> x.name === action.payload.name)
        let new_allTasks = Array.from(state.allTasks)
        new_allTasks.splice(index, 1)
        return {
            ...state,
            allTasks: new_allTasks
        }
    }

    if(action.type === ADD_DETAILS){
        let new_allTasks = state.allTasks.map(task => {
            if (task.name === action.payload.name){
                return {
                    ...task,
                    details: action.payload.details
                }
            } else {
                return task
            }
        })
        return {
            ...state,
            allTasks: new_allTasks
        }
    }

    if(action.type === ADD_DATE){
        let new_allTasks = state.allTasks.map(task => {
            if (task.name === action.payload.name){
                return {
                    ...task,
                    date: action.payload.date
                }
            } else {
                return task
            }
        })
        return {
            ...state,
            allTasks: new_allTasks
        }
    }

    if(action.type === SHOW_DETAILS){
        let new_allTasks = state.allTasks.map(task => {
            if (task.name === action.payload.name){
                return {
                    ...task,
                    showDetails: !task.showDetails
                }
            } else {
                return task
            }
        })
        return {
            ...state,
            allTasks: new_allTasks
        }
    }

    return state
}
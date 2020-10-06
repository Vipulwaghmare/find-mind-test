import React, {useState, useEffect} from 'react'
import Tasks from './Task.js/Tasks'
import logo from './Image/logo.jpg'

const TasksBoard = () => {
    const [img, setImg] = useState("")
    const [newList, setNewList] = useState(false)

    const profileIcon = () => {
        let number = Math.floor(Math.random()*100)
        return fetch(`https://picsum.photos/id/${number}/info`,{
            method: "GET",
        }).then(res => { 
            return res.json()
        }).then(res => {
            setImg(res.download_url)
        })
    }

    useEffect(()=> {
        profileIcon()
    },[])

    const addingList = e => {
        e.preventDefault()
        alert('Adding new list is unavailable')
    }

    const AddList = () => {
        return(
            newList &&
            <div className="add-new-list">
            <form className="list-section">
            <input 
                className="task-input"
                type="text" 
                placeholder="New List"
            />
            <button
                className="task-add-button"
                onClick={addingList}
            >
            +
            </button>
            </form>
            </div>
        )
    }

    return(
        <div>
        <AddList />
            <header className="main-header">
                <div className="main-title">
                    <img 
                        className="main-icon"
                        src={logo}
                        alt="Logo"
                    />
                    <h1     
                        className="main-title-h1">
                        TasksBoard</h1>
                </div>
                <div>
                    <img 
                        className="profile-icon"
                        src={img}
                        alt="Profile Icon"
                    />
                </div>
            </header>
                <Tasks />
            <button 
                onClick={()=>{setNewList(!newList)}}
                className="main-add-icon">
                {
                    newList || <i className="fas fa-plus"></i>
                }
                {
                    newList && <i className="fas fa-times"></i>
                }
                
            </button>
        </div>
    )
}

export default TasksBoard;
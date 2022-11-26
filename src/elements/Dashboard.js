import '../scss/dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { AppContext  } from './Context'
import { MainSection } from './ManiSection'

const tasks = ['Fix Logo', 'Design Project', 'Fix error', 'Review Project', 'Create App', 'Remove Comments', 'Analyz Market', 'Improve Social Media']
const menuItems = ['Tasks', 'Issues', 'Files', 'Raport']


export function Dashboard(){
    const context = useContext(AppContext)
    const { notification, setNotification, flag, misstake, setMisstake } = context
    const [item, setItem] = useState(menuItems)
    const [task, setTask] = useState(tasks)

    const handleSpace = (id) => {
        setItem((prev) => {
            const newItems = [...prev];
            newItems.splice(id, 0, "try again");
            return newItems;
        })
    }

    const restart = () => {
        setItem(menuItems)
    }
    const Task = (header) => {
        if(misstake < 5){
            setTask([...task, header])
            setNotification(notification + 1)
        }else{
            setTask(task.filter(item => item !== header))
            setNotification(notification + 1)
            task.length === 1 && setMisstake(misstake + 1)
        }
    }
    return (
        <>
            <div className="dashboard" style={flag ? {left: '-105%'} : {left: '0%'}}>
                <div className="dashboard__nav">
                    <ul className="dashboard__nav-list">
                        {item.map((item, id) => {
                            return <li className="dashboard__nav-item" style={item === 'try again' ? {color: 'transparent'} : null} key={id} onMouseOver={() => handleSpace(id)} onMouseLeave={restart}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className="dashboard__array">
                    {task.map((task, id) => {
                        return (
                            <div className="dashboard__array-item" key={id}>
                                <div className="dashboard__array-item-header">
                                    <p className="dashboard__array-item-header-title">{task}</p>                           
                                    <button className="dashboard__array-item-header-cancel" onClick={() => {Task(task)}}>
                                        <FontAwesomeIcon icon={faCancel} />    
                                    </button>  
                                </div>
                                <div className="dashboard__array-item-main">
                                    <MainSection />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
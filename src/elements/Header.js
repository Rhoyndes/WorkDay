import '../scss/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect } from 'react'
import { AppContext  } from './Context'

export function Header() {
    const context = useContext(AppContext)
    const { flag, notification, misstake, setLogOut } = context
    const [active, setActive] = useState(false)

    const handleNotification = () => {
        setActive(!active)
    }
    const log = () => {
        setLogOut(true)
    }

    useEffect(() => {
        setActive(false)
    }, [flag])

    return(
        <>
            <div className="header" style={flag ? {left: '-105%'} : {left: '0%'}}>
                <div className="header__logo">
                    <p className="header__logo-text">T</p>
                    <p className="header__logo-text">s</p>
                </div>
                <div className="header__user">
                    <div className="header__user-icons">
                        <div className="header__user-avatar" onClick={log}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="header__user-notification" onClick={handleNotification}>
                            <FontAwesomeIcon icon={faBell} />
                            <span className='header__user-notification-number'>{notification + misstake}</span>
                        </div>
                    </div>
                </div>
                <div className="header__notificationList" style={active ? {top: '9vh'} : {top: '-40vh'}}>
                    <div className="header__notificationList-container">
                        {[...Array(notification)].map((id, key) => {
                            return <div className='header__notificationList-container-msg' key={key}>You have made a change in the tasks of the team.</div>
                        })}
                        {[...Array(misstake)].map((id, key) => {
                            return <div className='header__notificationList-container-msg' key={key}>You got a new message.</div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
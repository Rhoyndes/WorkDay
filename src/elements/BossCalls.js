import '../scss/bossCalls.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react';
import { AppContext  } from './Context'

export const BossCalls = () => {
    const context = useContext(AppContext)
    const { misstake, setMisstake } = context
    const [state, setState] = useState(false)
    const [time, setTime] = useState(5)
    const [display, setDisplay] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
                setState(!state)
        }, 1000)
        return () => clearInterval(interval);
    }, [state])

    useEffect(() => {
        if(display === false){
            const interval = setInterval(() => {
                setTime(time => time - 1)
            }, 1000)
        return () => clearInterval(interval);
        }
    }, [display])


    useEffect(() => {
        if(time === -1){
            setDisplay(true) 
            setMisstake(misstake + 1)
        }
        // eslint-disable-next-line
    }, [time])

    useEffect(() => {
        if(misstake === 4){
            setTimeout(() => {
                setDisplay(false)
            }, 12000)
        }
    }, [misstake])
    return (
        <>
            <div className="bossCalls-background" style={{display: display ? 'none' : 'grid'}}>
                <div className="bossCalls-container">
                <FontAwesomeIcon className='bossCalls-icon' icon={faPhone} style={{animation: state ? 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' : ''}} />
                    <p className="bossCalls-time">{time}</p>
                    <p className="bossCalls-name">Boss</p>
                    <button className="bossCalls-button">Accept</button>
                </div>
            </div>
        </>
    )
};

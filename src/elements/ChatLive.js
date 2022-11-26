import '../scss/chatLive.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { AppContext  } from './Context'
import { useContext, useState, useEffect } from 'react'


export const ChatLive = () => {
    const context = useContext(AppContext)
    const { misstake, setMisstake, notification} = context 
    const [names, setNames] = useState([])
    const [cancel, setCancel] = useState(true)
    const msgError = ['What are you doing?', 'I hope you made a copy!!', 'What are you doing? Why are you adding new tasks for our team and removing projects?', 'File a raport quickly, because the bosses are about to call, enter to the Raport tab', "What are you doing, why aren't you answering the phone?"]

    useEffect(() => {
        if(misstake > 0){
        fetch(`https://randomuser.me/api/?results=${misstake}`)
        .then((response) => response.json())
        .then((actualData) => setNames([...names, actualData.results[0].name.first]));
        }
        if(misstake === 3){
            setTimeout(() => {
                setMisstake(misstake + 1)

            }, 4000)
        }
        // eslint-disable-next-line
    }, [misstake]);

    useEffect(() => {
        if(notification > 2 && misstake === 2){
            setMisstake(misstake + 1)
        }
        // eslint-disable-next-line
    }, [notification])


    return (
        <>
            <div className="chatLive" onClick={() => setCancel(!cancel)}>
                <div className="chatLive-icon-container">
                    <FontAwesomeIcon className='chatLive-icon' icon={faMessage} />
                </div>
                    <div className='chatLive-icon-notification'>{misstake}</div>
            </div>
            <div className="chatLive-page" style={cancel ? {scale: '0'} : {scale: '1'}}>
                <div className="chatLive-page-notification">
                    <button className='chatLive-page-cancel' onClick={() => setCancel(!cancel)}>X</button>
                    <div className="chatLive-page-notification-container">
                        {names.map((name, id) => {
                            return <div className="chatLive-page-notification-contact" key={id}>
                                <p className="chatLive-page-notification-contact-name">{name}</p>
                                <p className="chatLive-page-notification-contact-message">{msgError[id]}</p>
                            </div>
                        })}
                        {misstake === 6 && (
                            <div className="chatLive-page-notification-contact">
                            <p className="chatLive-page-notification-contact-name">BOSS</p>
                            <p className="chatLive-page-notification-contact-message">You're fired!</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

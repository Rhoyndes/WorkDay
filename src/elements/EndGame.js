import '../scss/endGame.scss'
import { AppContext  } from './Context'
import { useContext } from 'react'
export const EndGame = () => {
    const context = useContext(AppContext)
    const { misstake } = context
    
    return (
        <div className="endGame" style={misstake === 6 ? {display: 'grid'} : {display: 'none'}} >
            <div className="endGame-screen">
                <h3 className="endGame-title">Congratulations!</h3>
                <p className="endGame-text">You are fired.</p>
            </div>
        </div>
    )
};

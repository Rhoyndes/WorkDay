import '../scss/error.scss'
import { AppContext  } from './Context'
import { useContext } from 'react'

export const Error = () => {

    const context = useContext(AppContext)
    const { menu, setMenu } = context
    
    const refresh = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className="error" style={menu ? {display: 'grid'} : {display: 'none'}}>
              <p className="error__header">404 Not Found</p>
              <p className="error__header-description">try again</p>
              <button className="error__button-cancel" onClick={refresh}>Okey</button>
            </div>
        </>
    )
};

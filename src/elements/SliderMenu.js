import '../scss/sliderMenu.scss'
import { useContext, useState } from 'react'
import { AppContext  } from './Context'
import { MenuItem } from './MenuItem'

export function SliderMenu(){
    const context = useContext(AppContext)
    const { flag, setFlag, misstake, setMisstake } = context
    const [mobile, setMobile] = useState(false)
    const [ad, setAd] = useState(false)

    const handleButton = () => {
        setFlag(!flag)
    }
    const deleteMobileApp = () => {
        alert('You deleted the file')
        setMobile(!mobile)
        setMisstake(misstake + 1)
    }
    const deleteAdvertisingApp = () => {
        alert('You deleted the file')
        setAd(!ad)
        setMisstake(misstake + 1)
    }

    return(
        <>
            <div className="sliderMenu">
                <div className="sliderMenu__header">
                    <p className="sliderMenu__header-text">Profil Menu</p>
                    <button className="sliderMenu__header-hide" onClick={handleButton}>{flag ? 'show' : 'hide'}</button>
                </div>
                <div className="sliderMenu__main">
                    <MenuItem />
                    <div className="sliderMenu__main-recentProject">
                        <p className="sliderMenu__main-recentProject-text">
                            team project
                        </p>
                        <div className="sliderMenu__main-recentProject-item" style={mobile ? {display: 'none'} : {display: 'flex'}}>
                            <p className="recentProject-name">Mobile App</p>
                            <button className="recentProject-edit" onClick={deleteMobileApp}>edit</button>
                        </div>
                        <div className="sliderMenu__main-recentProject-item" style={ad ? {display: 'none'} : {display: 'flex'}}>
                            <p className="recentProject-name">Advertising Project</p>
                            <button className="recentProject-edit" onClick={deleteAdvertisingApp}>edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 
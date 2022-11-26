import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFeed, faMessage, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { AppContext } from './Context'
import { useContext } from 'react'

let menuItem = [{
    name: 'Home',
    icon: faHome,
},{
    name: 'Feed',
    icon: faFeed
},{
    name: 'Discuss',
    icon: faMessage
},{
    name: 'Calendar',
    icon: faCalendar
}]
export function MenuItem() {
    const context = useContext(AppContext)
    const { menu, setMenu } = context
    const [items, setItems] = useState([...menuItem])

    const displayItem = (name) => {
        setItems(items.filter(item => {
            return item.name !== name;
            })
         )
         setMenu(!menu)
    }
    
    return(
        <>
            {items.map((item, id) => {
                return <div className="sliderMenu__main-item" key={id} onClick={() => displayItem(item.name)}><FontAwesomeIcon className="sliderMenu__main-item-icon" icon={item.icon}/> {item.name}</div>
            })}
        </>
    )
};

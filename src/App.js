import './App.scss';
import { useState } from 'react'

import { AppContext } from './elements/Context'
import { ChatLive } from './elements/ChatLive'
import { Error } from './elements/Error'
import { SliderMenu } from './elements/SliderMenu'
import { Header } from './elements/Header'
import { LogOut } from './elements/LogOut'
import { Dashboard } from './elements/Dashboard'
import { BossCalls } from './elements/BossCalls'
import { EndGame } from './elements/EndGame'



function App() {
  const [flag, setFlag] = useState(false)
  const [menu, setMenu] = useState(false)
  const [logOut, setLogOut] = useState(false)
  const [misstake, setMisstake] = useState(0)
  const [notification, setNotification] = useState(0)
  return (
    <>
      <AppContext.Provider value={{flag, setFlag, menu, setMenu, misstake, setMisstake, notification, setNotification, logOut, setLogOut}}>
        <div className="resolutionCheck">
          <p className="resolutionCheck-text">The application only works on desktop, please change your device, thank you!</p>
        </div>
        <div className="container">
          <ChatLive />
          <Error />
          <SliderMenu />
          <Header />
          <LogOut />
          <Dashboard  />
          <BossCalls />
          <EndGame />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;

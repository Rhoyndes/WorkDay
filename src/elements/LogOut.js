import '../scss/logOut.scss'
import { useState, useContext } from 'react'
import { AppContext  } from './Context'

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return { formData, handleInputChange };
}

export function LogOut() {
    const context = useContext(AppContext)
    const { logOut, setLogOut } = context
    const { formData, handleInputChange } = useForm(
        {
            username: "",
            password: "",
        }
    );

    const { username, password } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === 'Daniel' && password === 'Carrot123'){
            setLogOut(false)
        }
    }
    
    return (
        <>
            <div className="screenLogging-container" style={logOut ? {display: 'grid'} : {display: 'none'}}>
                <div className="screenLogging-main">
                    <div className="screenLogging-logo">
                        <p className="screenLogging-logo-text">T</p>
                        <p className="screenLogging-logo-text">s</p>
                    </div>
                    <form className='screenLogging-form' onSubmit={handleSubmit}>
                        <input
                            className='screenLogging-form-input'
                            type="text"
                            name="username"
                            value={username}
                            placeholder='username'
                            onChange={handleInputChange}
                        />
                        <input
                            className='screenLogging-form-input'
                            type="password"
                            name="password"
                            value={password}
                            placeholder='password'
                            onChange={handleInputChange}
                        />
                        <button className='screenLogging-form-submit' type="submit">Log in</button>
                    </form>
                    <p className="screenLogging-alert">You logged out</p>
                </div>
            </div>
        </>
    )
};

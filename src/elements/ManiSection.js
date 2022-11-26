import { useState } from "react";

export const MainSection = () => {
    const [flag, setFlag] = useState(false)
    const handleFlag = () => {
        setFlag(!flag)
    }
    return (
        <> 
            <p className="dashboard__array-item-main-description" style={flag ? {display: 'none'} : {display: 'block'}}>below you will find more information...</p>
            <button className="dashboard__array-item-main-button" onClick={handleFlag}>{flag ? 'Show Less' : 'Show More'}</button>
        </>
    )
};

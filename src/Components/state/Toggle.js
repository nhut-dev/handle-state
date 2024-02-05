import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
    const [on, setOn] = useState(false);
    console.log(on);
    const handleToggle = () => {
        setOn(!on);
    }
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`sprinner ${on ? "active" : ""}`}></div>
            </div>
            {/* <div className='toggle-control'>
                <div className='toggle-off' onClick={() => setOn(false)}>Off</div>
                <div className='toggle-on' onClick={() => setOn(true)}>On</div>
            </div> */}
        </div>
    );
};

export default Toggle;
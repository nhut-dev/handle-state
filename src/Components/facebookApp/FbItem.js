import React from 'react';

const FbItem = (props) => {
    return (
        <div>
            <div className="frame">
                <div className="avatar">
                    <img src={props.avatar} alt="" />
                </div>
                <div className='title'>
                    <h3>{props.title}</h3>
                </div>
                    <div className='doc'>
                         <p>{props.doc}</p>
                    </div>
            </div>

        </div>
    )
}
export default FbItem;
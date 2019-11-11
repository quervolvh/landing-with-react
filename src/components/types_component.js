import React from 'react';

function TypeComponent (props){
        const {types} = props;
        return (
            <div >
                <div className={`flexi ${types.underlineClass}`}  onClick={()=> props.onClick(types.index)}>
                            <p className='head2'> {types.feature} </p>
                            <div className={`sample_red ${types.m_underlineclass}`}></div>
                </div>
            </div>
        )
    }

export default TypeComponent;
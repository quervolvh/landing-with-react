import React, { Component } from 'react';

class TypeComponent extends Component {
    render() {
        const {types} = this.props;
        return (
            <div >
                <div className={`flexi ${types.underlineClass}`}  onClick={()=> this.props.onClick(types.index)}>
                            <p className='head2'> {types.feature} </p>
                            <div className={`sample_red ${types.m_underlineclass}`}></div>
                </div>
            </div>
        )
    }
}

export default TypeComponent;
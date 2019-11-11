import React, { Component } from 'react';

class ExtensionComponent extends Component {

    render() {
        const { extension } = this.props;
        return (
                <div className='browser' style={{marginTop: extension.index * 70}}>
                    <div id='browser_icon' className={`${extension.browser_icon}`}>	</div>
                    <p className='head3'> Add to {extension.browser_name} </p>
                    <p className='head2'> Minimum version {extension.minimum_version} </p>
                    <div id='dotted'></div>
                    <button className='blue'> Add & Install Extension </button>
                </div>
        )
    }
}

export default ExtensionComponent;
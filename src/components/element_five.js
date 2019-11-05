import React, { Component } from 'react';

class ElementFive extends Component {

    render() {
        return (
            <div>
                <div id='contact' className='CONTACT' ref={this.props.refer}>
                    <p id='count'> 35,000+ ALREADY JOINED </p>
                    <p id='contact_talk'> Stay up-to-date with what </p>
                    <p id='contact_talk'> we're doing </p>
                    <div id='input_box'>
                        <input type='text' placeholder="Enter your email address" id='enter' />
                        <button className='red'> Contact Us </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ElementFive;
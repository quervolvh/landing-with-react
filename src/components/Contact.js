import React from 'react';
import { Ref } from '../actions/Actions';

function Contact(props) {
    return (
        <div>
            <div id='contact' className='CONTACT' ref={Ref[2]}>
                <p id='count'> 35,000+ ALREADY JOINED </p>
                <p className='contact_talk'> Stay up-to-date with what </p>
                <p className='contact_talk'> we're doing </p>
                <div id='input_box'>
                    <input type='text' placeholder="Enter your email address" id='enter' />
                    <button className='red'> Contact Us </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
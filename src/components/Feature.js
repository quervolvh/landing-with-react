import React from 'react';
import { Ref } from '../actions/Actions';

function Feature(props) {
    
    return (
        <div>
            <div id='features' className='FEATURES' ref={Ref[0]}>
                <p className='head1'> Features </p>
                <p className='head2'> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go. </p>
            </div>
            <div id='type'>
                <div id='types'>
                    {props.children}
                </div>
            </div>


        </div>
    )

}

export default Feature;
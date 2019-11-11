import React from 'react';
import { Ref } from '../actions/Actions'; 

function PricingComponent (props){

        const { price } = props;
        return (
            <div className='price' ref={Ref[1]}>
                <div id='browser_icon' className={`${price.price_icon}`}>	</div>
                <div className='random_container'>
                    <div className='price_name_container'>
                        <p className='head3'> {price.price_name} </p>
                    </div>
                </div>
                <div className='price_cont'>
                    <p className='price_head2'> {price.price} </p>
                    <p className='price_per'> {price.period} </p>
                </div>
                <div>
                    {props.children}
                </div>
                <div className='button_back'>
                    <button className='blue'> sign up </button>
                </div>

            </div>
        )
}

export default PricingComponent;
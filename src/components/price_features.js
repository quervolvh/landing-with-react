import React, { Component } from 'react';

class PricingFeature extends Component {

    render() {
        const { price_feature } = this.props;
        const logo = require('../images/zero.svg');
        return (
            <div className='price_concept'>
                <div className='price_conc_con'> <img src={`${logo}`}></img> </div>
                <div className='price_conc_p'>
                    <p> {price_feature.feature} </p>
                </div>
            </div>
        )
    }
}

export default PricingFeature;
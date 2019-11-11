import React from 'react';

function PricingFeature(props) {
    const { price_feature } = props;
    const logo = require('../images/zero.svg');
    return (
        <div className='price_concept'>
            <div className='price_conc_con'> <img src={`${logo}`} alt='price concept logo'></img> </div>
            <div className='price_conc_p'>
                <p> {price_feature.feature} </p>
            </div>
        </div>
    )
}

export default PricingFeature;
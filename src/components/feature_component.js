import React from 'react';

function FeatureComponent(props){

        const { feature } = props;
        const logo = require(`../${feature.image}`);
        return (
            <div id='product_advert'>
                    <div id='blue_cloth_1_mobile'></div>
                    <div id='image_left' style={{backgroundImage: `url(${logo})`}}></div>
                    <div id='blue_cloth_1'></div>
                    <div id='talk'>
                        <p className='head1'> {feature.feature_name} </p>
                        <p className='head2'> {feature.feature_body} </p>
                        <button className='blue info'> More info </button>
                    </div>
            </div>
        )
}

export default FeatureComponent;

import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <div>
                <div id='pricing' className='PRICING' ref={this.props.refer}>
                    <p className='head1'> Pricing </p>
                    <p className='head2'> Our prices exist in ranges that agree with every customer </p>
                </div>
                <div>
                    <div className='price_box'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;
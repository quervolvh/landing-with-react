import React, { Component } from 'react';

class ElenentOne extends Component {
    render() {
        return (
            <div>
                <div id='features' className='FEATURES' ref={this.props.refer}>
                    <p className='head1'> Features </p>
                    <p className='head2'> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go. </p>
                </div>
                <div id='type'>
                    <div id='types'>
                        {this.props.children}
                    </div>
                </div>
                

            </div>
        )
    }
}

export default ElenentOne;
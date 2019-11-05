import React, { Component } from 'react';

class ElenentThree extends Component {

    render() {
        return (
            <div>
                <div id='extension'>
                    <p className='head1'>Download the extension </p>
                    <p className='head2'> We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize. </p>
                </div>
                <div id='browser_box'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ElenentThree;
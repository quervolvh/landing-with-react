import React, { Component } from 'react';

class ElenentFour extends Component {

    render() {
        return (
            <div>
                <div id='faq'>
                    <p className='head1'> Frequently Asked Questions </p>
                    <p className='head2'> Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us. </p>
                    <div id='question_box'>
                        {this.props.children}
                    </div>
                    <button className='blue'> More info </button>
                </div>

            </div>
        )
    }
}

export default ElenentFour;
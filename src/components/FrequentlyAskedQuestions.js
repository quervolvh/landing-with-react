import React from 'react';

function FrequentlyAskedQuestions(props) {

        return (
            <div>
                <div id='faq'>
                    <p className='head1'> Frequently Asked Questions </p>
                    <p className='head2'> Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us. </p>
                    <div id='question_box'>
                        {props.children}
                    </div>
                    <button className='blue'> More info </button>
                </div>

            </div>
        )
    }

export default FrequentlyAskedQuestions;
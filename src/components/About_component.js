import React from 'react';

function AboutComponent() {
    return (
        <div id='about'>
            <div class='contact_texts'>
                <div className='aboutTitle'>
                    <p className='contact_talk'> ABOUT US </p>
                </div>
                <div className='answer'>
                    <p className='about_us_body'>A bookmark is a thin marker, commonly made of card, leather, or fabric,
                         used to keep the reader's place in a book and to enable the reader
                         to return to it with ease. Other frequently used materials for bookmarks are paper,
                         metals like silver and brass, silk, wood, cord, and plastic.</p>
                </div>
                <div id='Contact'> <button className='blue'> Contact Us </button> </div>
            </div>
            <div className='About_icon'>
            </div>
        </div>
    );
}
export default AboutComponent;
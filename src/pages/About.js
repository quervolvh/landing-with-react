import React, { Component } from 'react';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import AboutComponent from '../components/About_component';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Data from '../data/Data';
import { showChild, switchEr } from '../actions/Actions';

class About extends Component {

    constructor(props) {
        super(props);
        this.showChild = showChild.bind(this);
        this.switchEr = switchEr.bind(this);
    }
    state = Data;
    render() {
        return (
            <div>
                <Header />
                <AboutComponent />
                <Contact />
                <Footer />
            </div>
        );
    }

}
export default About;
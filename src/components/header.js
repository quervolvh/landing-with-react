import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div id='Bar'>
                    <div id='top'>
                        <div id='icon_container'>
                            <div id='icon'> </div>
                        </div>
                        <div id='menu'>
                            <ul>
                                <li onClick={() => this.props.onClick(0)}> FEATURES  </li>
                                <li onClick={() =>this.props.onClick(1)}> PRICING </li>
                                <li onClick={() => this.props.onClick(2)}>  CONTACT </li>
                                <li id='login_text'> <a href='www.ww.w'> LOGIN </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;
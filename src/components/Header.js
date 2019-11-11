import React from 'react';
import { Link } from "react-router-dom";
import { ScrollToElement, Ref } from '../actions/Actions';

function Header() {
    return (
            <div id='header'>
                <div id='Bar'>
                    <div id='top'>
                        <div id='icon_container'>
                            <Link to=""><div id='icon'> </div> </Link>
                        </div>
                        <div id='menu'>
                            <ul>
                                <li> <Link to="/about"> ABOUT  </Link> </li>
                                <li onClick={() => ScrollToElement(Ref,0)}> FEATURES  </li>
                                <li onClick={() => ScrollToElement(Ref,1)}> PRICING </li>
                                <li onClick={() => ScrollToElement(Ref,2)}>  CONTACT </li>
                                <li id='login_text'> <a href='www.ww.w'> LOGIN </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Header;
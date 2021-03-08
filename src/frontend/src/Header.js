import React from 'react';
import { Button } from 'antd';
import './Header.css';

const Header = props => (
    <div>
        <header class="header-fixed">

            <div class="header-limiter">

                <h1><a href="/">Suisen<span>DB</span></a></h1>

                <nav>
                    <Button>Contact Me</Button>
                </nav>

            </div>

        </header>

        <div class="header-fixed-placeholder"></div>
    </div>
);

export default Header;
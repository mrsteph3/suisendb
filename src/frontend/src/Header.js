import React from 'react';
import './Header.css';
import githubLogo from './images/github.png';

class Header extends React.Component {

    githubClicked() {
        console.log("Sending to GitHub page.")
        window.open('https://github.com/mrsteph3/', '_blank')
    }
    
    render() {
        return (
            <div>
                <header class="header-fixed">

                    <div class="header-limiter">

                        <h1><a href="/">Suisen<span>DB</span></a></h1>

                        <nav>
                            <button className="githubButton"><img src={githubLogo} alt="github button" onClick={() => this.githubClicked()} /></button>
                        </nav>

                    </div>

                </header>

                <div class="header-fixed-placeholder"></div>
            </div>
        );
    }
}

export default Header;
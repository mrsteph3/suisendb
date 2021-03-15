import React from 'react';
import './Header.css';
import githubLogo from './images/github.png';

class Header extends React.Component {

    githubClicked() {
        console.log("Sending to GitHub page.")
        window.open('https://github.com/mrsteph3/suisendb', '_blank')
    }
    
    render() {
        return (
            <div>
                <header className="header-fixed">

                    <div className="header-limiter">

                        <h1><a href="/">Suisen<span>DB</span></a></h1>

                        <nav>
                            <button className="githubButton" onClick={() => this.githubClicked()}>Check out the GitHub docs! <img src={githubLogo} alt="github button" /> </button>
                        </nav>

                    </div>

                </header>

                <div className="header-fixed-placeholder"></div>
            </div>
        );
    }
}

export default Header;
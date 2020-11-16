import React from 'react';
import TitleLogo from './titleLogo';
import NavItem from './navButton';
import { nav, navLinks } from './siteData';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <TitleLogo handleClick={this.handleClick} />

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">

                            {navLinks.map((link, i) => {
                                return(
                                    <li className="nav-item" key={i}>
                                        <NavItem 
                                            onClick={this.handleClick}
                                            name={link}
                                            active={this.props.page}
                                        />
                                    </li>
                                )
                            })}
                            
                            <li className="nav-item" key="nav-05">
                                <button className="nav-link-active" target="_blank" rel="noreferrer">
                                    <a href="https://medium.com/@FoodPyramid">{nav.blog}</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


/* Original NavBar
<div className="collapse navbar-collapse" id="ftco-nav">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item" key="nav-01"><a href="" className="nav-link" id="home" onClick={this.handleClick}>{nav.home}</a></li>
        <li className="nav-item" key="nav-02"><a href="" className="nav-link" id="about" onClick={this.handleClick}>{nav.about}</a></li>
        <li className="nav-item" key="nav-03"><a href="" className="nav-link" id="stats" onClick={this.handleClick}>{nav.stats}</a></li>
        <li className="nav-item" key="nav-04"><a href="" className="nav-link" id="team" onClick={this.handleClick}>{nav.team}</a></li>
        <li className="nav-item" key="nav-05"><a href="https://medium.com/@FoodPyramid" className="nav-link" target="_blank" rel="noreferrer">{nav.blog}</a></li>
    </ul>
</div>
*/
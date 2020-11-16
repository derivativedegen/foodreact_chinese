import React from 'react';
import TitleLogo from './titleLogo';
import NavItem from './navButton';
import { nav, siteLinks } from './siteData';

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
                            {
                                Object.entries(nav).slice(0, 4).map(([key, value]) => {
                                    return(
                                        <li className="nav-item" key={key}>
                                            <NavItem 
                                                id={key}
                                                onClick={this.handleClick}
                                                name={value}
                                                active={this.props.page}
                                            />
                                        </li>
                                    )
                                })
                            }
                            <li className="nav-item" key="nav-05">
                                <button className="nav-link-active">
                                    <a href={siteLinks.blog} target="_blank" rel="noreferrer">{nav.blog}</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
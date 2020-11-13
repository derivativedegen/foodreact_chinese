import React from 'react';

export default class TitleLogo extends React.Component {
    render() {
        return(
            <a className="navbar-brand" href="" id="home" onClick={this.props.handleClick}>
                <img src="images/logo-transparent.png" className="header-logo" alt="logo" /> 食物金字塔
            </a>
        )
    }
}
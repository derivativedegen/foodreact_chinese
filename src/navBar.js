import React from 'react';
import TitleLogo from './titleLogo';
import BuyNavButton from './buyNavButton';

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

    renderBuy() {
        if (this.props.page !== 'stats') {
            return (
                <BuyNavButton handleClick={this.handleClick} />
            )
        };
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <TitleLogo handleClick={this.handleClick} />

                    
                    {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> 菜单
                    </button>*/}

                    

                    <div className="collapse navbar-collapse" id="ftco-nav">
                    {/*this.renderBuy()*/}

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" key="nav-01"><a href="" className="nav-link"  id="home" onClick={this.handleClick}>主页</a></li>
                        <li className="nav-item" key="nav-02"><a href="" className="nav-link" id="about" onClick={this.handleClick}>关于</a></li>
                        <li className="nav-item" key="nav-03"><a href="" className="nav-link" id="stats" onClick={this.handleClick}>数据</a></li>
                        <li className="nav-item" key="nav-04"><a href="" className="nav-link" id="team" onClick={this.handleClick}>团队</a></li>
                        <li className="nav-item" key="nav-05"><a href="https://foodpyramid.medium.com/ftokens-%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%E6%97%81%E6%B0%8F%E7%BB%8F%E6%B5%8E%E4%B8%8E%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%88%99-53879879df0b" className="nav-link" target="_blank" rel="noreferrer">博客</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
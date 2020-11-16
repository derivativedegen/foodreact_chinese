import React, { Component } from 'react';
import TokenButton from './tokenButton';
import { headings } from './siteData';
import { tokenData } from './tokenData';
import FoodStats from './statsFood';
import FusdcStats from './statsfUSDC';
import FethStats from './statsfETH';
import Footer from './footer';


export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTokenData: tokenData,
            id: tokenData[0].id,
            nextRebase: this.props.nextRebase,
        };
        this.changeToken = this.changeToken.bind(this);
    }

    changeToken(e) {
        this.setState({ 
            id: parseInt(e.target.id)
        });
    }

    showTokenStats() {
        switch (this.state.id) {
            default:
                return <FoodStats 
                        nextRebase={this.state.nextRebase} 
                        foodCirculating={this.props.foodCirculating} />
            case 1:
                return <FusdcStats
                        nextRebase={this.state.nextRebase}
                        fusdcPeg={this.props.fusdcPeg} />
            case 2:
                return <FethStats
                        nextRebase={this.state.nextRebase} />
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.id !== this.state.id) {
            const newToken = this.state.allTokenData[this.state.id];
            this.setState({
                id: newToken.id
            })
        }
    }

    render() {
        return (
            <div className="header-container">
                <div className="row d-flex justify-content-center">
                  <h2><b>{headings.stats}</b></h2>
                </div>

                <div className="container">
                    <div id="tokenButtons" className="row justify-content-center">
                        {this.state.allTokenData.map(token => 
                            <TokenButton 
                                name={token.name}
                                id={token.id} 
                                active={this.state.id} 
                                handleClick={this.changeToken} />
                        )}
                    </div>


                    {this.showTokenStats()}

                </div>

                <Footer mobile={this.props.mobile} onClick={this.props.onClick} />
            </div>
        )
    }
}
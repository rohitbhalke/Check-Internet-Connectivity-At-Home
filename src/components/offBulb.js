/**
 * Created by rbo2913 on 09/01/18.
 */
import React, { Component } from 'react';
import '../App.css';

const NO_LIGHT = "There Is No Light At Home.";

class OffBulb extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    <div className='container lamp'>
                        <div className='cable'></div>
                        <div id='bulb'>
                            <div className='bulb_cover'></div>
                            <div className='bulb_light'></div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                                <feColorMatrix in="blur" mode="matrix"
                                               values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                                               result="goo"/>
                                <feBlend in="SourceGraphic" in2="goo"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div>
                    Current status : {NO_LIGHT}
                    <p>There is no Light from {this.props.lastSynchedDate.toString()}</p>
                </div>
            </div>
        )
    }
}

export default OffBulb;
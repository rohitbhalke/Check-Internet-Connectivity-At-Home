/**
 * Created by rbo2913 on 09/01/18.
 */
import React, { Component } from 'react';
import '../App.css';

const YES_LIGHT = "Yipee !! There Is Light At Home";

class OnBulb extends Component {

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
                <div className='light_particles'>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                    <div className='particle'></div>
                </div>
            </div>
        </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                                           result="goo"/>
                            <feBlend in="SourceGraphic" in2="goo"/>
                        </filter>
                    </defs>
                </svg>
            </div>
                <p>
                    <i class="em em-lightning"></i>
                    <span className="separator">{YES_LIGHT}</span>
                    <i class="em em-beers"></i>
                    <i class="em em-tv"></i>
                </p>
            </div>
        )
    }
}

export default OnBulb;
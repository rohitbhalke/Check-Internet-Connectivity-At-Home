/**
 * Created by rbo2913 on 09/01/18.
 */
import React, { Component } from 'react';
import '../App.css';

const NO_LIGHT = "There Is No Internet Connection At Home.";

class OffBulb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastSyncDate : ""
        }
    }

    componentDidMount() {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let lastSynchedDate = this.props.lastSynchedDate;
        let formatedText = "";
        let monthName = months[lastSynchedDate.getMonth()];
        let day = lastSynchedDate.getDate();
        let year = lastSynchedDate.getFullYear();
        let hours = lastSynchedDate.getHours() > 12 ? lastSynchedDate.getHours() - 12 : lastSynchedDate.getHours();
        let minutes = lastSynchedDate.getMinutes();
        let seconds = lastSynchedDate.getSeconds();
        let ext = lastSynchedDate.getHours() > 12 ? "PM" : "AM";

        formatedText = hours + ":" + minutes + ":" + seconds + ext + " " + day + " " + monthName + " " + year;

        this.setState({
            lastSynchedDate : formatedText
        })
    }

    render() {
        return (
            <div>
                <div className="statusbar">
                    <span className="separator">{NO_LIGHT}</span>
                    <p><i class="em em-cry"></i>
                        <i class="em em-disappointed"></i>
                        <span className="separator">There is no Internet Connectivity at Home from <b>{this.state.lastSynchedDate}</b></span>
                        <i class="em em-cry"></i>
                        <i class="em em-mobile_phone_off"></i>
                    </p>
                </div>
                <div>
                    <div className='container lamp'>
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
            </div>
        )
    }
}

export default OffBulb;
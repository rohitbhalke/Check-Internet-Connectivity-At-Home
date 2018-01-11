/**
 * Created by rbo2913 on 10/01/18.
 */
import React, { Component } from 'react';
import '../App.css';

class Loader extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        )
    }
}

export default Loader;
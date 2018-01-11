import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './components/firebase';
import OnBulb from './components/onBulb';
import OffBulb from './components/offBulb';
import Loader from './components/loader';

const miliSecToMinuteConverter = 60 * 1000;
const LIMITER = 5; // In minutes

class App extends Component {

    constructor() {
        super();
        this.state = {
            isLightAvailable : "",
            loading : true,
            lastSynchedDate: ""
        }
    }

    componentDidMount(){
        let lightObj = fire.database().ref().child('light'), isLightAvailable= false;
        let self = this, lastSynchedDate;
        lightObj.on("value", function(snapshot) {

            let light = snapshot.val();
            if(light.isLightOn) {
                let currentDate = new Date();
                lastSynchedDate = new Date(light.syncTime);
                if((currentDate - lastSynchedDate)/miliSecToMinuteConverter < LIMITER) {
                    isLightAvailable = true;
                }
                else {
                    isLightAvailable = false;
                }
            }
            self.setState({
                isLightAvailable : isLightAvailable.toString(),
                loading : false,
                lastSynchedDate : lastSynchedDate
            })
        }, function err(error) {
            console.log(error);
        });
    }

  render() {
        let lightStatus = this.state.isLightAvailable === 'true', bulb;
        if(this.state.loading) {
            bulb = <Loader/>
        }
      else if(lightStatus) {
          bulb = <OnBulb/>
      }
      else{
        bulb = <OffBulb lastSynchedDate={this.state.lastSynchedDate}/>
      }
    return (
      <div className="App">
        <div className="App-intro">
            {bulb}
        </div>
      </div>
    );
  }
}

export default App;

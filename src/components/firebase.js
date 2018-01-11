/**
 * Created by rbo2913 on 05/01/18.
 */
import firebase from 'firebase'
console.log(process.env);
var config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AuthDomain,
    databaseURL: process.env.REACT_APP_DatabaseURL,
    projectId: process.env.REACT_APP_ProjectId,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId
};
console.log(config);
var fire = firebase.initializeApp(config);
export default fire;

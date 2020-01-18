import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAkLGCH8D9DDh0USWLof0nYPoMDtqkUOps",
    authDomain: "beerme4-abad9.firebaseapp.com",
    databaseURL: "https://beerme4-abad9.firebaseio.com",
    projectId: "beerme4-abad9",
    storageBucket: "beerme4-abad9.appspot.com",
    messagingSenderId: "903544881796",
    appId: "1:903544881796:web:2eca4ef79eb4d857b3f8d1",
    measurementId: "G-GZ0KJMBEZF"
}

export default class ConfigStore {
    constructor() {
        firebase.initializeApp(config)
        this.splashTime = 1000
        this.splashImg = require('../../assets/images/splash.png')
        this.loginBG = require('../../assets/images/login.png')
    }
    get splashImg() {
        return this.splashImg
    }
    get splashTime() {
        return this.splashTime
    }
    get loginBG() {
        return this.loginBG
    }
}

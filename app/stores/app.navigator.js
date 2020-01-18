import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { appNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/splash.screen';
import LoginScreen from '../screens/login.screen';
import MatchScreen from '../screens/match.screen';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}
const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
}
const Match = {
  screen: MatchScreen,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Matches',
    drawerLabel: 'Matches'
  }
}
const MatchStack = createStackNavigator({
  Match: Match
},{})
const RouteConfig = {
  initialRoute: 'Splash'
}

const navigate = appNavigator ({
    Match: {screen: MatchStack},
    Splash: SplashScreen,
    Login: LoginScreen
}, RouteConfig)

export default appNavigator;
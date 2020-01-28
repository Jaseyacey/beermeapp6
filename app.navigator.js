import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import SplashScreen from './app/screens/splash.screen';
import LoginScreen from './app/screens/login.screen';
import MatchScreen from './app/screens/match.screen';

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
const MatchStack = StackNavigator({
  Match: Match
},{})
const RouteConfig = {
  initialRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
  Splash: Splash,
  Login: Login,
  Match: {screen: MatchStack}
},RouteConfig)

export default AppNavigator;
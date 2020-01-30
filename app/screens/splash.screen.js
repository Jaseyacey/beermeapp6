// import React, { Component } from 'react';
// import { image, View} from 'react-native';
// import { inject } from 'mobx-react';

// @inject("stores")
// export default class SplashScreen extends Component {
//     constructor(props) {
//         super(props) 
//     }
//     componentDidMount() {
//         const {stores, navigation} = this.props;
//         setTimeout(() => {
//             navigation.navigate("Login")
//         }, stores.config.SplashTime)
//     }
//     render() {
//         const { stores } = this.props
//         return (
//             <View style={{flex: 1}}>
//                 <Image style={{flex: 1, width: null, height: null}} source={stores.config.SplashImg}/>
//             </View>
//         )
//     }
// }

import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>beerMe</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
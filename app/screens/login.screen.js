// import React, { Component } from 'react';
// import {Container,Content} from 'native-base';
// import {View,Image,StyleSheet,Dimensions} from 'react-native';
// import { inject } from 'mobx-react';

// import Login from '../components/login.component';

// @inject("stores")
// export default class LoginScreen extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const{stores} = this.props
//         return (
//         <Container>
//             <View style={StyleSheet.container}>
//                 <Content scrollEnabled={false}>
//                     <Image style={StyleSheet.loginBackground} source={stores.config.LoginBG}>
//                         <View style={StyleSheet.loginForeground}>
//                             <Login {...this.props}/>
//                         </View>
//                     </Image>
//                 </Content>
//             </View>
//         </Container>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0
//     },
//     loginBackground: {
//         flex: 1,
//         width: null,
//         height: null
//     },
//     loginForeground: {
//         flex: 1,
//         marginTop: Dimensions.get('window').height/1.75,
//         paddingTop: 20,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 90,
//         bottom: 0
//     }
// })

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
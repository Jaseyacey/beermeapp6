import React from 'react'
import { 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    Button } 
from 'react-native'

export default class Main extends React.Component {
    state = { currentUser: null }

    render() {
        const { currentUser } = this.state

        return (
            <View style={StyleSheet.container}>
                <Text>
                    Cheers {currentUser && currentUser.email}!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contaiiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
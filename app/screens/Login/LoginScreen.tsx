import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the LoginScreen.</Text>
      </View>
    );
  }
}

export default LoginScreen;

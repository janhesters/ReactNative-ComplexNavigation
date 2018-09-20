import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen.</Text>
      </View>
    );
  }
}

export default SettingsScreen;

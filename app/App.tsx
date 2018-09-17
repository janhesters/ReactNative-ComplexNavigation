import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  en: {
    welcome: "Welcome to React Native!",
    instructions: "To get started, edit App.tsx",
    instructionsIOS: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    instructionsAndroid: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
  },
  de: {
    welcome: "Willkommen zu React Native!",
    instructions: "Um anzufangen, bearbeite App.tsx",
    instructionsIOS: "Drücke Cmd+R zum Neuladen,\n" + "Cmd+D oder schüttle für das Entwickler Menü",
    instructionsAndroid: "Tippe doppelt auf R auf deiner Tastatur um neu zu laden,\n" + "Schüttle oder drücke den Menü Knopf für das Entwickler Menü"
  }
})

const instructions = Platform.select({
  ios: strings.instructionsIOS,
  android: strings.instructionsAndroid
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{strings.welcome}</Text>
        <Text style={styles.instructions}>{strings.instructions}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

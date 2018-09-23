import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";

class DetailScreen extends Component {
  static navigationOptions = {
    headerTitle: "Details"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the DetailScreen.</Text>
      </View>
    );
  }
}

export default DetailScreen;

import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import strings from "./strings";

class DetailScreen extends Component {
  static navigationOptions = {
    headerTitle: strings.detailTitle
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

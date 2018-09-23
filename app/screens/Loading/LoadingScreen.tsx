import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

class LoadingScreen extends Component<NavigationScreenProps> {
  componentDidMount = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the LoadingScreen.</Text>
      </View>
    );
  }
}

export default LoadingScreen;

import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

class LoginScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the LoginScreen.</Text>
        <Button
          title={strings.forgottenPassword}
          onPress={() => this.props.navigation.navigate("PasswordResetScreen")}
        />
        <Button
          title={strings.loginTitle}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
      </View>
    );
  }
}

export default LoginScreen;

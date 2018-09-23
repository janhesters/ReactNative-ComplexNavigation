import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: strings.settingsTitle,
    headerLeft: Platform.select({
      ios: (
        <Icon
          name="ios-log-out"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      ),
      android: (
        <Icon
          name="md-menu"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen.</Text>
      </View>
    );
  }
}

export default SettingsScreen;

import strings from "./strings";
import styles from "./styles";
import { strings as detailStrings } from "../Detail";
import { strings as optionStrings } from "../Options";
import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

class HomeScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: strings.homeTitle,
    headerLeft: Platform.select({
      ios: null,
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Button title={detailStrings.detailTitle} onPress={() => navigate("DetailScreen")} />
        <Button title={optionStrings.optionsTitle} onPress={() => navigate("OptionsScreen")} />
      </View>
    );
  }
}

export default HomeScreen;

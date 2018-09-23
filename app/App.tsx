import Navigator from "./navigation/Navigator";
import React, { Component } from "react";
import Orientation, { orientation } from "react-native-orientation";

interface Props {}
export default class App extends Component<Props> {
  componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  render() {
    return <Navigator />;
  }
}

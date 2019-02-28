import React from "react";
import { StyleSheet, Text, View, WebView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Homefeed from "./Screens/Homefeed";
import CollectionScreen from "./Screens/CollectionScreen";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <View>
        <createAppContainer />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Homefeed,
    Details: CollectionScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

const MainView = styled.View`
  z-index: -1;
`;

const PlayerView = styled.View`
  z-index: 5;
`;

import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  WebView
} from "react-native";
import styled from "styled-components";
import Data from "../data/Data";
import Collection from "../Components/Collection";
import Player from "../Components/Player";

class Homefeed extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header>
            <Title>Player</Title>
          </Header>
          <Player />
          <Feed>
            {Data.map((mix, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.navigate("Details", { mix: mix });
                }}
              >
                <Collection title={mix.title} count={mix.count} />
              </TouchableOpacity>
            ))}
          </Feed>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Homefeed;

const Header = styled.View`
  height: 80px;
`;
const Title = styled.Text``;
const Feed = styled.View``;

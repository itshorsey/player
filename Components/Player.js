import React, { Component } from "react";
import { WebView } from "react-native";
import styled from "styled-components";
import Video from "react-native-video";

class Player extends Component {
  render() {
    return (
      <EmbedPlayer>
        <WebView
          originWhitelist={["*"]}
          source={{
            html: `<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2F8ballradio%2Fgreg-fox-22619%2F" frameborder="0" ></iframe>`
          }}
        />
      </EmbedPlayer>
    );
  }
}

export default Player;

const EmbedPlayer = styled.View`
  height: 120px;
  margin-bottom: 100px;
`;

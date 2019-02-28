import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

class CollectionScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const mix = navigation.getParam("mix", "NO-MIX");
    return (
      <Container>
        <Text>{mix.title}</Text>
        <Text>{mix.count}</Text>
      </Container>
    );
  }
}

export default CollectionScreen;

const Container = styled.View`
  flex: 1;
`;

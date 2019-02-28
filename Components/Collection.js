import React from "react";
import styled from "styled-components";

const Collection = props => (
  <Container>
    <Cover>
      <Title>{props.title}</Title>
      <Count>{props.count}</Count>
    </Cover>
  </Container>
);

export default Collection;

const Container = styled.View`
  background: #eee;
  height: 350px;
  width: 100%;
  flex: 1;
  margin-bottom: 2px;
`;

const Cover = styled.View`
  margin-top: 50px;
`;
const Title = styled.Text``;
const Count = styled.Text``;

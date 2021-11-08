import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";

const Media = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

const VMedia = ({ posterPath, originalTitle, voteAverage }) => (
  <Media>
    <Poster path={posterPath} />
    <Title>
      {originalTitle.slice(0, 12)}
      {originalTitle.length > 12 ? "..." : null}
    </Title>
    <Votes votes={voteAverage} />
  </Media>
);

export default VMedia;
import React from "react";
import styled from "styled-components/native";

const Vote = styled.Text`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
`;

const Votes = ({ voteAverage }) => (
  <Vote>{voteAverage > 0 ? `⭐️${voteAverage}/10` : `Coming Soon`}</Vote>
);

export default Votes;

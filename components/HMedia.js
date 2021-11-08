import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";

const HMovie = styled.View`
  padding: 0px 30px;
  flex-direction: row;
`;

const HColumn = styled.View`
  margin-left: 15px;
  width: 80%;
`;

const Overview = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  width: 80%;
`;

const Release = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  margin: 0 10px;
  font-weight: 500;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
`;

const HMedia = ({
  posterPath,
  originalTitle,
  overview,
  releaseDate,
  voteAverage,
}) => {
  return (
    <HMovie>
      <Poster path={posterPath} />
      <HColumn>
        <Title>
          {originalTitle.slice(0, 11)}
          {originalTitle.length > 11 ? "..." : null}
        </Title>
        <Votes voteAverage={voteAverage} />
        <Release>
          {new Date(releaseDate).toLocaleDateString("ko", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Release>
        <Overview>
          {overview !== "" && overview.length > 85
            ? `${overview.slice(0, 85)}...`
            : overview}
        </Overview>
      </HColumn>
    </HMovie>
  );
};

export default HMedia;

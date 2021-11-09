import React from "react";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { makeImgPath } from "../utils";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import Poster from "./Poster";
import Votes from "./Votes";
import { useNavigation } from "@react-navigation/native";

const View = styled.View`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Column = styled.View`
  width: 40%;
  margin-left: 15px;
`;

const BgImg = styled.Image``;

const Overview = styled.Text`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
`;

const Slide = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,
  fullData,
}) => {
  const isDark = useColorScheme() === "dark";
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stack", {
      screen: "Detail",
      params: {
        ...fullData,
      },
    });
  };
  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View>
        <BgImg
          style={StyleSheet.absoluteFill}
          source={{ uri: makeImgPath(backdropPath) }}
        />
        <BlurView
          tint={isDark ? "dark" : "light"}
          intensity={80}
          style={StyleSheet.absoluteFill}
        >
          <Wrapper>
            <Poster path={posterPath} />
            <Column>
              <Title>{originalTitle}</Title>
              <Votes voteAverage={voteAverage} />
              <Overview>{overview.slice(0, 80)}...</Overview>
            </Column>
          </Wrapper>
        </BlurView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Slide;

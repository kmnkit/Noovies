import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Movie = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Stack", { screen: "Three" })}>
    <Text>Movie</Text>
  </TouchableOpacity>
);

export default Movie;

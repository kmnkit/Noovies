import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import VMedia from "./VMedia";

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const HListSeparator = styled.View`
  width: 20px;
`;

const HList = ({ title, data }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={HListSeparator}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_title ?? item.original_name}
            voteAverage={item.vote_average}
            fullData={item}
          />
        )}
      />
    </ListContainer>
  );
};

export default HList;

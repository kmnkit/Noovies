import React from "react";
import { RefreshControl } from "react-native";
import { ScrollView } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";

const Tv = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: todayLoading,
    data: todayData,
    isRefetching: isRefetchingToday,
  } = useQuery(["tv", "today"], tvApi.airing);
  const {
    isLoading: topLoading,
    data: topData,
    isRefetching: isRefetchingTop,
  } = useQuery(["tv", "top"], tvApi.topRated);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: isRefetchingTrending,
  } = useQuery(["tv", "trending"], tvApi.trending);

  const onRefresh = () => {
    queryClient.refetchQueries(["tv"]);
  };
  const loading = todayLoading || topLoading || trendingLoading;
  const refreshing =
    isRefetchingToday || isRefetchingTop || isRefetchingTrending;
  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      <HList title="Trending TV" data={trendingData.results} />
      <HList title="Airing Today TV" data={todayData.results} />
      <HList title="Top Rated TV" data={topData.results} />
    </ScrollView>
  );
};

export default Tv;

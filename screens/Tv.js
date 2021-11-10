import React, { useState } from "react";
import { RefreshControl } from "react-native";
import { ScrollView } from "react-native";
import { useInfiniteQuery, useQuery, useQueryClient } from "react-query";
import { tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";
import { getNextPage } from "../utils";

const Tv = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const {
    isLoading: todayLoading,
    data: todayData,
    hasNextPage: todayHasNextPage,
    fetchNextPage: todayFetchNextPage,
  } = useInfiniteQuery(["tv", "today"], tvApi.airing, {
    getNextPageParam: getNextPage,
  });
  const {
    isLoading: topLoading,
    data: topData,
    hasNextPage: topHasNextPage,
    fetchNextPage: topFetchNextPage,
  } = useInfiniteQuery(["tv", "top"], tvApi.topRated, {
    getNextPageParam: getNextPage,
  });
  const {
    isLoading: trendingLoading,
    data: trendingData,
    hasNextPage: trendingHasNextPage,
    fetchNextPage: trendingFetchNextPage,
  } = useInfiniteQuery(["tv", "trending"], tvApi.trending, {
    getNextPageParam: getNextPage,
  });

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  };
  const loading = todayLoading || topLoading || trendingLoading;

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
      <HList
        hasNextPage={trendingHasNextPage}
        fetchNextPage={trendingFetchNextPage}
        title="Trending TV"
        data={trendingData.pages.map((page) => page.results).flat()}
      />
      <HList
        hasNextPage={todayHasNextPage}
        fetchNextPage={todayFetchNextPage}
        title="Airing Today TV"
        data={todayData.pages.map((page) => page.results).flat()}
      />
      <HList
        hasNextPage={topHasNextPage}
        fetchNextPage={topFetchNextPage}
        title="Top Rated TV"
        data={topData.pages.map((page) => page.results).flat()}
      />
    </ScrollView>
  );
};

export default Tv;

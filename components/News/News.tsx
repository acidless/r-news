import { ActivityIndicator, Text, View } from "react-native";
import useNewsData from "../../hooks/useNewsData/useNewsData";
import React from "react";
import NewsList from "./NewsList/NewsList";
import Search from "./Search/Search";
import NewsNotFound from "./NewsList/NewsNotFound/NewsNotFound";
import globalStyles from "../../assets/styles";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header/Header";

/*====================*/

function News() {
  const { error, loading, data, loadMore, refetchQuery } = useNewsData();

  /*====================*/

  if (error) {
    return <Text>{error.message}</Text>;
  } else if (loading) {
    return (
      <ActivityIndicator
        style={globalStyles.centered}
        size="large"
        color="#f64c72"
      />
    );
  } else {
    return (
      <View style={{ minHeight: "100%" }}>
        <Search onSubmit={refetchQuery} />
        {data!.topHeadlines.articles.length ? (
          <NewsList
            loadMore={loadMore}
            articles={data!.topHeadlines.articles}
          />
        ) : (
          <NewsNotFound />
        )}
      </View>
    );
  }
}

/*====================*/

export default News;

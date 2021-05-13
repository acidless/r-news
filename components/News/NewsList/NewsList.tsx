import { FlatList, ListRenderItemInfo, View } from "react-native";
import React from "react";
import { INewsItem } from "../../../hooks/useNewsData/useNewsData";
import NewsItem from "./NewsItem/NewsItem";

/*====================*/

interface PropTypes {
  articles: Array<INewsItem>;
  loadMore: Function;
}

/*====================*/

const NewsList: React.FC<PropTypes> = function ({ loadMore, articles }) {
  const renderItem = ({ item }: ListRenderItemInfo<INewsItem>) => {
    return <NewsItem newsItem={item} />;
  };

  return (
    <View>
      <FlatList
        style={{ marginBottom: 200 }}
        onEndReached={loadMore as any}
        data={articles}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

/*====================*/

export default NewsList;

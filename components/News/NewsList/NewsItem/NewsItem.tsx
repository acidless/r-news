import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { INewsItem } from "../../../../hooks/useNewsData/useNewsData";
import React from "react";
import Link from "../../../Common/Link/Link";
import globalStyles from "../../../../assets/styles";

/*====================*/

interface PropTypes {
  newsItem: INewsItem;
}

/*====================*/

const NewsItem: React.FC<PropTypes> = function ({ newsItem }) {
  return (
    <Link url={newsItem.url}>
      <View style={{ ...styles.newsItem, ...globalStyles.bordered }}>
        {Boolean(newsItem.image) && (
          <View>
            <Image style={styles.newsImage} source={{ uri: newsItem.image }} />
          </View>
        )}
        <Text style={styles.newsTitle}>{newsItem.title}</Text>
        <Text>{newsItem.description}</Text>
      </View>
    </Link>
  );
};

/*====================*/

const styles = StyleSheet.create({
  newsItem: {
    marginVertical: 15,
    padding: 15,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },

  newsImage: {
    flex: 1,
    height: Dimensions.get("screen").height * 0.3,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

/*====================*/

export default NewsItem;

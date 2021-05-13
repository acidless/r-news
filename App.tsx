import React from "react";
import { View } from "react-native";
import News from "./components/News/News";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";

/*====================*/

const apolloClient = new ApolloClient({
  uri: "https://r-news-api.herokuapp.com/graphql",
});

/*====================*/

export default function App() {
  return (
    <View
      style={{ marginVertical: 30, minHeight: "100%", marginHorizontal: 15 }}
    >
      <ApolloProvider client={apolloClient}>
        <News />
      </ApolloProvider>
    </View>
  );
}

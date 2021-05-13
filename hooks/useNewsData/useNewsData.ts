import { useQuery } from "@apollo/client";
// @ts-ignore
import getNewsData from "./graphql/newsData.graphql";
import { useState } from "react";

/*====================*/

interface NewsResponse {
  [x: string]: any;
  topHeadlines: {
    totalResults: number;
    articles: Array<INewsItem>;
    __typename: string;
  };
}

export interface INewsItem {
  source: {
    name: string;
  };
  title: string;
  description: string;
  publishedAt: Date;
  image: string;
  url: string;
}

/*====================*/

function useNewsData() {
  const { loading, error, data, fetchMore, refetch } = useQuery<NewsResponse>(
    getNewsData
  );

  const [currentPage, setPage] = useState(1);

  /*====================*/

  async function refetchQuery(search: string) {
    if (!loading) {
      refetch && (await refetch({ search }));

      setPage(1);
    }
  }

  async function loadMore() {
    if (!loading) {
      fetchMore &&
        (await fetchMore({
          variables: { page: currentPage + 1 },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;

            return Object.assign({}, prev, {
              topHeadlines: {
                __typename: prev.topHeadlines.__typename,
                totalResults: prev.topHeadlines.totalResults,
                articles: [
                  ...prev.topHeadlines.articles,
                  ...fetchMoreResult.topHeadlines.articles,
                ],
              },
            });
          },
        }));

      setPage(currentPage + 1);
    }
  }

  /*====================*/

  return { loading, error, data, loadMore, refetchQuery };
}

/*====================*/

export default useNewsData;

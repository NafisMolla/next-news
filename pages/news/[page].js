import React from "react";
import Toolbar from "../../components/Toolbar";
import NewsCard from "../../components/NewsCard";
import styles from "../../styles/NewsCard.module.css";
import { useRouter } from "next/router";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const news = ({ articles, pageNumber }) => {
  const router = useRouter();

  return (
    <div className={"bg-yellow-50"}>
      <Toolbar />
      <div>
        {articles.map((article, index) => (
          <NewsCard
            title={article.title}
            desc={article.description}
            imgURL={article.urlToImage}
            url={article.url}
          />
        ))}

        <div className={styles.paginator}>
          <Stack spacing={2}>
            <Pagination
              count={20}
              shape="rounded"
              onChange={(e, value) => router.push(`/news/${value}`)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.page;

  if (!pageNumber || pageNumber < 1 || pageNumber > 20) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const newsAPI = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&pageSize=5&page=${pageNumber}&apiKey=d154c1deac58469298e1a5e230fd6e65`,
    { method: "GET" }
  ).then((res) => res.json());

  const { articles } = newsAPI;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default news;

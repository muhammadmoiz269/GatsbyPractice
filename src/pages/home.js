import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Posts from "../Component/posts/posts";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  },
  Btn: {
    background: "#0C2461",
    color: "#ffff",
    marginBottom: "2rem",
  },
}));

export const query = graphql`
  query LoadMoreQuery {
    allContentfulRecipies {
      edges {
        node {
          name
          featuredImage {
            id
            file {
              url
            }
          }
          description {
            id
            description
          }
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const classes = useStyles();

  // Array of all news articles
  const allNews = data.allContentfulRecipies.edges;

  // Initially state me 2 post daal rhy slice k through
  const [list, setList] = useState([...allNews.slice(0, 3)]);

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false);

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 1);

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true);
  };

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < allNews.length;
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 3)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
  
      <div className={classes.root}>
        <div>{<Posts article={list} />}</div>
        {hasMore ? (
          <Button
            className={classes.Btn}
            onClick={handleLoadMore}
            variant="contained"
            color="primary"
            endIcon={<MoreHorizIcon />}
          >
            Load More
          </Button>
        ) : (
          <p>No more results</p>
        )}
      </div>
  
  );
};

export default HomePage;

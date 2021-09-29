import React from "react";
import Post from "../post/post";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import "../Blog/Blog.css"
import { motion } from "framer-motion";


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 160,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  },
  root: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
    height: "100%",
    // background: "#F2F5F9",
  },
}));

const containers = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const Posts = ({ article }) => {

  const classes = useStyles();

  console.log("artciles at posts", article);

  return (
  
      <Grid container>
        <Grid item xs>
        
        </Grid>
        <Grid
          item
          lg={11}
          
          
          className={classes.MuiGridCont}
          container
          spacing={3}
          style={{
         
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "3rem",
            paddingBottom: "2rem",
            
          }}
        >
          {
            <motion.ul
            className="containers"
            variants={containers}
            initial="hidden"
            animate="visible"
          >
            {article.map((items , index) => (
              <motion.li key={index} className="item" variants={item} style={{listStyle:"none"}}>
          <Post key={index} articles={items}></Post>



              </motion.li>
            ))}
          </motion.ul>
       
          
          }
        </Grid>

       
        <Grid item xs>
         
        </Grid>
      </Grid>

  );
};

export default Posts;

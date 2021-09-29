import React from "react";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { motion } from "framer-motion";
import "./Blog.css"

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

const Blog = ({ article , UpadteState }) => {
  const classes = useStyles();

  console.log("artciles at posts", article);
  console.log("blog page ", UpadteState)

  return (
    
      <Grid container>
        <Grid item xs>
       
        
        </Grid>

        <Grid
          item
          xs={11}
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
          <FeaturedPost UpadteState={UpadteState} key={index} articles={items}></FeaturedPost>



              </motion.li>
            ))}
          </motion.ul>
       
          
          }
        </Grid>
        <Grid item xs>
         
        </Grid>
        
      </Grid>

    // <Layout>
    //   <Grid container>
    //     <Grid item xs></Grid>

    //     <Grid
    //       item
    //       xs={11}
    //       className={classes.MuiGridCont}
    //       container
    //       spacing={3}
    //       style={{
    //         paddingLeft: "2rem",
    //         paddingRight: "2rem",
    //         paddingTop: "3rem",
    //         paddingBottom: "2rem",
    //       }}
    //     >
    //       {article.map((item, index) => {
    //         return <FeaturedPost key={index} articles={item}></FeaturedPost>;
    //       })}
    //     </Grid>
    //     <Grid item xs></Grid>
    //   </Grid>
    // </Layout>
  );
};

export default Blog;

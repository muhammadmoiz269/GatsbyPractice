import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useRef } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { DeleteCard } from "../../../main";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginRight: "30px",
    marginBottom: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function FeaturedPost({ articles, UpadteState }) {
  const classes = useStyles();

  const { blogName, blogImage, contentful_id } = articles.node;
  const constraintsRef = useRef(null);

  const trigger = () => {
    DeleteCard(contentful_id);
    console.log("contentful_id", contentful_id);

    // UpadteState(blogName);
  };

  return (
    <motion.div className="container" ref={constraintsRef}>
      <motion.div className="item" drag dragConstraints={constraintsRef}>
        <Card className={classes.root} style={{ margin: "1rem" }}>
          <CardMedia component="img" height="340" image={blogImage.file.url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blogName}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{ color: "#e74c3c" }} />
            </IconButton>
            <IconButton aria-label="share">
              <DeleteIcon style={{ color: "#6c5ce7" }} onClick={trigger} />
            </IconButton>
            <IconButton aria-label="share">
              <Link to={`/${blogName.toLowerCase()}`}>
                <MoreHorizIcon style={{ color: "#6c5ce7" }} />
              </Link>
            </IconButton>
          </CardActions>
        </Card>
      </motion.div>
    </motion.div>
  );
}

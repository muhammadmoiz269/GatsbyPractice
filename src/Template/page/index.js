import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Navbar from "../../Component/navbar/navbar";

const PageTemplate = ({ pageContext }) => {
  return (
    <div>
  

      <Card sx={{ maxWidth: 245 }} style={{ margin: "1rem" }}>
        <CardMedia
          component="img"
          height="340"
          image={pageContext.node.blogImage.file.url}
          // alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pageContext.node.blogName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pageContext.node.blogDescription.blogDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon style={{ color: "#e74c3c" }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon style={{ color: "#6c5ce7" }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
export default PageTemplate;

import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import Navbar from "../Component/navbar/navbar";
import { useLocation } from "@reach/router";
import Blog from "../Component/Blog/Blog";
import { graphql } from "gatsby";
import CircularProgress from "@material-ui/core/CircularProgress";
import Layout from "../Component/Layout";
import { motion } from "framer-motion";


export const query = graphql`
query MyQueries {
  allContentfulBlogs {
    edges {
      node {
        blogName
        blogDescription {
          blogDescription
        }
        blogImage {
          file {
            url
          }
        }
        contentful_id
      }
    }
  }
}
`;

// data

// markup
const IndexPage = ({ data }) => {
  const [content, setcontent] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log("*********", data.allContentfulBlogs.edges);
    setcontent(data.allContentfulBlogs.edges);
    // client
    //   .getEntries()
    //   .then((response) => {
    //     console.log("items",response.items)
    //     setcontent(response.items);
    //   })
    //   .catch(console.error);
  }, []);

  const UpadteState = (blogName) =>{

    console.log("blog Name is ",blogName)
    var newObj=[]=content.filter(function(CurrentElem)
    {
   
      return CurrentElem.node.blogName !== blogName
    })
   
  
  
    setcontent(newObj);
  
  
  }

  

  return (
    
      <div>
        <h2>
          {content.length === 0 ? (
            <CircularProgress />
          ) : (
            <Blog article={content} UpadteState={UpadteState}/>
          )}
        </h2>
      </div>
  
  );
};

export default IndexPage;

import React from 'react'
import { useState, useEffect } from "react";
import Posts from "../Component/posts/posts";
import { graphql } from "gatsby"
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from '../Component/navbar/navbar';


export const query = graphql`query MyQuery {
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
  }`

const  Contentful = ({data}) => {
  const [content, setcontent] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log("*********",data.allContentfulRecipies.edges)
    setcontent(data.allContentfulRecipies.edges)
    // client
    //   .getEntries()
    //   .then((response) => {
    //     console.log("items",response.items)
    //     setcontent(response.items);
    //   })
    //   .catch(console.error);
  }, []);

    return (
  
<div>


  
        
  
      <h2>
        {content.length === 0 ? (
          <CircularProgress />
        ) : (
          <Posts article={content} />
        )}
      </h2>
</div>

    
  

    )
}

export default Contentful

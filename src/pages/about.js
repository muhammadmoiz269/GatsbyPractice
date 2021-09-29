// Step 1: Import React
import * as React from 'react'
import PostList from '../Template/post-list'
import { useState, useEffect } from "react";
import Posts from "../Component/posts/posts";
import { graphql } from "gatsby"
import CircularProgress from '@material-ui/core/CircularProgress';
import Blog from '../Component/Blog/Blog';
import PaginationLinks from '../Component/PaginationLinks/PaginationLinks';
import Navbar from '../Component/navbar/navbar';

export const Get_Paginate = graphql` query Get_Paginate {
  allContentfulBlogs(limit: 2, skip: 0) {
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
      }
    }
    totalCount
  }
}`


// Step 2: Define your component
const  AboutPage = ({data}) => {
  const [content, setcontent] = useState([]);
  const postPerpage = 2
  let numberOfpages = Math.ceil(data.allContentfulBlogs.totalCount / postPerpage)
  useEffect(() => {
    // Update the document title using the browser API
    // console.log("*********",data.allContentfulRecipies.edges)
    setcontent(data.allContentfulBlogs.edges)
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
          <>
          <Blog article={content}  />
          <PaginationLinks currentPage={1} numberOfpages={numberOfpages}/>
          </>

   
          
        )}
      </h2>
      </div>

    
  

    )
}

export default AboutPage
import { graphql } from 'gatsby'
import React from 'react'
import Blog from '../Component/Blog/Blog'
import FeaturedPost from '../Component/FeaturedPost/FeaturedPost'
import Navbar from '../Component/navbar/navbar'
import PaginationLinks from "../Component/PaginationLinks/PaginationLinks"



export const PostQueryList = graphql `
query PaginationQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogs(limit: $limit, skip: $skip) {
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
    }
  }
`
const PostList = (props) => {
    console.log("props are ", props.data)
    const posts = props.data.allContentfulBlogs.edges
  
    const { currentPage, numPages } = props.pageContext

    

    return (
  

        <div >
    
            {  
            <div >
            
                <Blog article={posts}   />
                <PaginationLinks currentPage={currentPage}  numberOfpages={numPages}/>
            </div>

             
            }
        </div>


    )
}

export default PostList

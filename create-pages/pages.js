const {slash} = require(`gatsby-core-utils`);
const customTemplates = ["/blog/", "/", "/blog", "blog"];
const singlePageTemplate = require.resolve(`../src/Template/page/index.js`);
const PageTemplate = require.resolve("../src/Template/post-list");



const GET_PAGES = `
    query GET_PAGES{
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
              }
            }
          }
    }
`;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const fetchPosts = async () => {
    // Do query to get all posts and pages, this will return the posts and pages.
    return await graphql(GET_PAGES).then(({ data }) => {
      console.log(data);
      const {
        allContentfulBlogs: { edges },
      } = data;

      return { pages: edges };
    });
  };

  // When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
  await fetchPosts().then(({ pages }) => {
    // 2. Create Single PAGE: Loop through all pages and create single pages for pages.
    pages &&
      // eslint-disable-next-line array-callback-return
      pages.map((page) => {
        // If its not a custom template, create the page.
        if (!customTemplates.includes(page.node.blogName)) {
          createPage({
            path: `${page.node.blogName.toLowerCase()}`,
            component: slash(singlePageTemplate),
            context: { ...page }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
          });
        }
      });

      //pagination code start

    const postsPerPage = 2;
    const numberOfpages = pages.length
    const numPages = Math.ceil(pages.length / postsPerPage);
    
    Array.from({ length: numPages }).forEach((_, index) => {
      const isFirstpage = index === 0 
      const currentPage = index +   1

      if(isFirstpage) return

      createPage({
        path: `/page/${currentPage}`,
        component: slash(PageTemplate),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numPages
        },
      });
    });

      //pagination code end

  });
};

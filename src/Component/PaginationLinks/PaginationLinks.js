import React from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";
import { Link } from "gatsby";



import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const PaginationLinks = ({ currentPage, numberOfpages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfpages;
  const PreviousPage =
    currentPage - 1 === 1 ? "/about" : "/page/" + (currentPage - 1).toString();
  const nextPage = "/page/" + (currentPage + 1).toString();

  console.log("number os pages", numberOfpages);
  console.log("First is", isFirst);
  console.log("last is", isLast);
  console.log("Prev is", PreviousPage);
  console.log("Next is", nextPage);

  return (
  

    <div style={{textAlign:"center"}}>
      <Pagination aria-label="Page navigation example" >
        {isFirst ? (
          <></>
        ) : (
          <PaginationItem style={{display: "inline"}}>
            <Link to={PreviousPage}>
              <ArrowBackIosIcon />
            </Link>
            {/* <PaginationLink previous href={PreviousPage} /> */}
          </PaginationItem>
        )}

        {Array.from({ length: numberOfpages }, (_, i) =>
          currentPage === i + 1 ? (
            <PaginationItem active key={`pageNumber${i + 1}`} style={{display: "inline" , padding:"1rem 1rem"}}>
              <Link to={`/${i === 0 ? "about" : "page/" + (i + 1).toString()}`}>
                {i + 1}
              </Link>
            </PaginationItem>
          ) : (
            <PaginationItem key={`pageNumber${i + 1}`} style={{display: "inline" , padding:"1rem 1rem"}}>
              <Link to={`/${i === 0 ? "" : "page/" + (i + 1).toString()}`}>
                {i + 1}
              </Link>

              {/* <PaginationLink  href={`/${i === 0 ? '' : 'page/' + (i + 1).toString() }`}>
                    {i+1}

                      
                    </PaginationLink> */}
            </PaginationItem>
          )
        )}

        {isLast === true ? (
          //    <PaginationItem disabled >
          //    <PaginationLink next href={nextPage} />
          //  </PaginationItem>
          <></>
        ) : (
          <PaginationItem style={{display: "inline"}}>
            <Link to={nextPage}>
              <ArrowForwardIosIcon />
            </Link>
          </PaginationItem>
        )}
      </Pagination>
    </div>
  

  );
};

export default PaginationLinks;

import React, {useState , useEffect} from 'react'
import ReactPaginate from 'react-paginate';
// import styles from "./Pagination.module.scss" 
const Pagination = ({ info, setPageNumber, pageNumber }) => {
  let [width ,  setWidth]  = useState(window.innerWidth);
  let updateDimention = () => {
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize" , updateDimention) ;
    return () => window.removeEventListener("resize",updateDimention) ;
  } , [])
  return (

    <>
    <style jsx>
      {`@media (max-width :768px){
          .next , .prev {
            display : none ; 
          }
          .pagination{
            font-size : 14px ; 
          }
      }`}
    </style>
    <ReactPaginate className='pagination justify-content-center gap-4 my-4'
     pageCount={info?.pages}
     nextLabel = "Next"
     previousLabel= "Prev"
     forcePage={pageNumber===1? 0 : pageNumber -1  }
     nextClassName='btn border border-primary next'
     previousClassName='btn border border-primary prev'
     marginPagesDisplayed={width < 576 ? 1 : 2}
     pageRangeDisplayed={width < 576 ? 1 : 2}
     pageClassName='next-item'
     activeClassName='active'
     onPageChange={(data)=>{
      setPageNumber(data.selected +1);
     }}
     pageLinkClassName='page-link'
     />
    </>
  )
}

export default Pagination;
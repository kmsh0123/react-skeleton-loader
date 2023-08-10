import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';

const DataFetch = () => {
  const apiUrl = "https://dummyjson.com/products/"
  const [products,setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesPerPage] = useState(20);
  const itemsPerPage = 100;

  const RenderData = async () => {
    const {data}  = await axios.get(`${apiUrl}?page=${currentPage}&limit=${itemsPerPage}`);
    console.log(data);
    setProducts(data.products);
  }
  useEffect(()=>{
    RenderData();  
  },[currentPage])

  const lastPostIndex = currentPage * pagesPerPage;
  const firstPostIndex = lastPostIndex - pagesPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

 

  return (
   <>
     <div className='container mx-auto grid grid-cols-5 '>
    {
      
      currentPosts?.map(pd =>  <Card key={pd.id} pd={pd} /> )
    }
    </div>
    <Pagination
     totalPosts={products.length}
     pagesPerPage = {pagesPerPage}
     setCurrentPage = {setCurrentPage}
     currentPage={currentPage}
    />
   </>
  )
}

export default DataFetch
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import Pagination from './Pagination';
import {useSearchParams} from 'react-router-dom'


const DataFetch = () => {
  const apiUrl = "https://dummyjson.com/products/"
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const page = searchParams.get("page") ? searchParams.get("page") : currentPage;

  const [products,setProducts] = useState([]);
  const [pagesPerPage] = useState(10);
  const itemsPerPage = 100;

  console.log(page);

  const RenderData = async () => {
    const {data}  = await axios.get(`${apiUrl}?page=${searchParams}&limit=${itemsPerPage}`);
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
     setSearchParams={setSearchParams}
     searchParams={searchParams}
    />
   </>
  )
}

export default DataFetch
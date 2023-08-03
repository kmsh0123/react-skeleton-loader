import React, { useEffect, useState } from 'react'
import "./App.css"
import Card from './components/Card'
import axios from 'axios'

const App = () => {
  const [products,setProducts] = useState([]);
    const RenderData = async () => {
    const {data}  = await axios.get("https://dummyjson.com/products/");
    console.log(data);
    setProducts(data.products)
  }
  

  useEffect(()=>{
    RenderData();
  },[])
  return (
    <div className='container mx-auto grid grid-cols-5'>
    {
      
      products?.map(pd =>  <Card key={pd.id} pd={pd} /> )
    }
    </div>
  )
}

export default App
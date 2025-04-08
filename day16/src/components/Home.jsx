import React, { useEffect, useState } from 'react'
import Card from './Card';
import './bootstrap.min.css'
import './Card.css' 

// import axios from 'axios';
const Home = () => {
  const [currpage, setCurrpage]=useState(0);
  const [data, setData] = useState([]);

  useEffect(()=>{
    getData();
  },[currpage]);

  const getData =async ()=>{
    try{
      const responseData =await fetch("https://dummyjson.com/products");
      const data = await responseData.json();
      setData(data.products)
    }catch(e){
      console.log(e.message)
    }finally{
      console.log("done here!")
    }
  }
  // this section repeat evertime so we use useeffect
  // getData();
  // console.log("B    done   here ")
 const totalPage = Math.ceil(data.total/data.limit);
 const pages =[];
 for(let i =0;i<totalPage;i++)
 {
  pages.push(i+1);
 }
  return (
    <>
    <select onChange={(e)=>{
      setCurrpage(e.target.value);
    }}>
      {pages.map(pageNumber=>(<option>{pageNumber}</option>))}
    </select>

    <div className="container1">
       {data.length>0 && data.map((e)=>(
         <Card val = {e}/>
       ))}
    </div>
     
    </>
  )
}

export default Home



import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from "./Button";
import {CardLikeHeartIcon} from "../svg"

const AllCards = () => {
  const { REACT_APP_BASE_URL } = process.env;
  const [productData, setProductData] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(()=>{
    axios("http://localhost:3009/get-data").then((res)=>{
      // console.log(res.data.data) 
      setProductData(res.data.data)
    })

  },[refresh])
  return (
    <div className="all-cards">
      <div className="container">
      <div className="all-cards_content">
      {productData.map((item)=>(
        <div className='card' key={item.id}>
        {/* <h2>{item.id}</h2> */}
      <div className="card-view">
        <Button>Add Cart</Button>
        <Button>Details</Button>
        <CardLikeHeartIcon/>
      </div>
      <img src={item.image} alt="" />
      <h2>{item.title.slice(0,10)}</h2>
        </div>
      ))}
    </div>
    </div>
    </div>
    
    
  );
};

export default AllCards;
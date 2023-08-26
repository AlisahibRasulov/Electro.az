import React from 'react'
import Brands from '../components/Brands'
import DiscountCard from '../components/DiscountCard';
import NewCards from '../components/NewCards';
import Carousel3 from '../components/Carousel3';

const Home = () => {
  return (
    <div>
       <Carousel3/>
      <Brands/>
      <DiscountCard/>
      <NewCards/>
    </div>
     
  )
}

export default Home
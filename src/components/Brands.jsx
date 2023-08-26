import React from 'react'
import { imageData } from '../datas/BrandsData'

const Brands = () => {
  return (
   
     
    <div className='brands'>
         <div data-aos="fade-up"> 
    <div className="container">
      <h1>Top Brendlər</h1>
     <div className="brands-item">
       {imageData.map((brand)=>(
           <div className='brands-border' key={brand.id}>
               <img src={brand.image} alt="" />
           </div>
       ))}
     </div> 
   </div>
   </div>
   </div>
   
  )
}

export default Brands
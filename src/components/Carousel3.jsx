import React from 'react';
import { Carousel } from 'antd';
import { imageData } from '../datas/CarouselData';

import Img1 from "../img/carousel/Image1.jpg"
import Img2 from "../img/carousel/Image2.jpg"

const contentStyle = {
  marginTop: "20px",
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const imageStyle = {
    width: "100%",
    height: "100%",
    // objectFit:"cover"
}

const Carousel3 = () => {
//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };
  return (
    <div className="container">
  <Carousel autoplay>

  {/* {imageData.map((item)=>(
        <div style={contentStyle} key={item.id}>
       <img src={item.image} alt="" style={imageStyle}/>
       <h1>{item.title}</h1>
       </div>
        ))}
     */}
         
    <div>
      <h3 style={contentStyle}>
        <img src={Img1} alt="" style={imageStyle}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={Img2} alt="" style={imageStyle}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
    
  );
};
export default Carousel3;
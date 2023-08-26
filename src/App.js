import React from "react";
import { Route, Routes } from "react-router-dom"
// ? components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";




// ? Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Basket from "./pages/Basket";

// ? Product Pages
import AllProducts from "./pages/Products/AllProducts";
import Computers from "./pages/Products/Computers";
import Phones from "./pages/Products/Phones";
import Cameras from "./pages/Products/Cameras";
import Accessories from "./pages/Products/Accessories";





function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      {/* <div className="container">
      <Button btn-type='success'>Yess</Button>
      <Button btn-type='primary'icon={<FooterTwitterIcon/>}>No</Button>
      <div style={{width:"400px", marginBottom: "45px"}}>
        <Label
      label="Adinizi daxil edin" required/>
        <Input icon={<SearchIcon/>}/>
      </div>
      <div style={{width:"400px", marginBottom: "45px"}}>
        <Label
      label="Nomrenizi daxil edin"/>
        <Input/>
      </div>
      <div style={{width:"400px", marginBottom: "45px"}}>
        <Label
      label="Sifrenizi daxil edin" required/>
        <Input type="password"/>
      </div>
      <Alert type='warning' text="Istifadeci sehvdir"/>
      <Textarea disabled/>
      <CardLikeHeartIcon className="card-like"/>


      </div> */}
         {/* <Button btn-type='primary'icon={<FooterTwitterIcon/>}>No</Button> */}


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/basket" element={<Basket />} />
    
  {/* Product Page */}
    <Route path="/all-products" element={<AllProducts />} />
    <Route path="/computers" element={<Computers />} />
    <Route path="/phones" element={<Phones />} />
    <Route path="/cameras" element={<Cameras />} />
    <Route path="/accessories" element={<Accessories />} />
  </Routes>  
  <Footer/>
</div>
  );
}

export default App;

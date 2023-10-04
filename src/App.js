import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation} from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
// ? COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Button from "./components/Button";



// ? PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Basket from "./pages/Basket";
import Like from "./pages/Like";

  // ? Products page
import AllProducts from "./pages/Products/AllProducts/AllProducts";
import Computers from "./pages/Products/Computers/Computers";
import Phones from "./pages/Products/Phones/Phones";
import Cameras from "./pages/Products/Cameras/Cameras";
import Accessories from "./pages/Products/Accessories/Accessories";
import Games from "./pages/Products/Games/Games"
import DiscountPages from "./pages/Products/Discount/DiscountPages";
import ProductDetail from "./pages/ProductDetail";

//? TestUser
// import Register from "./pages/TestUser/Register";
// import Login from "./pages/TestUser/Login";
// import Dashboard from "./pages/Dashboard"

// ? icons
// import {FooterTwitterIcon,SearchIcon,HeaderLikeHeartIcon,CardLikeHeartIcon,HeaderBasketIcon,CardBasketIcon} from "./svg";
// import Dropdown from "./components/Dropdown";


function App() {
  // const location = useLocation();
  // const [user, setUser] = useState(null);
  // const [user, setUser] = useState(true);
  // ? Test
//   //  const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
// const categories = ['COMPUTER', 'PHONE', 'CAMERAS', 'ACCESSORIES'];

// const handleCategoryChange = newCategory => {
//   setSelectedCategory(newCategory);
// };
// const isLoginPage = location.pathname === '/login';
// const isSignupPage = location.pathname === '/signup';
  return (
    <div className="app">
      <Header/>
      {/* {!isLoginPage && !isSignupPage && <Header />} */}
      {/*  Test  */}
      {/* <header className="App-header">
        <CategoryDropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
      </header> */}
    
     
      {/* <Navbar /> */}
    
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
{/* <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />

  <Route path="/basket" element={<Basket />} />

  <Route path="/all-products" element={<AllProducts />} />
  <Route path="/computers" element={<Computers />} />
  <Route path="/phones" element={<Phones />} />
  <Route path="/cameras" element={<Cameras />} />
  <Route path="/accessories" element={<Accessories />} />
  <Route path="/signup" element={<Signup />} /> 
</Routes> */}


         
  <Routes>
  {/* <Route  
      path="/signup" 
      element={
        user ? <Navigate to="/login"/> : <Signup setUser={setUser}/>
      }
      /> */}
        {/* <Route  
      path="/login" 
      element={
        user ? <Login setUser={setUser}/> : <Navigate to="/signup"/>  
      }
      /> */}
        {/* <Route path="/login" element={<Login setUser={setUser}/>} /> */}

        {/* <Route  
      path="/login" 
      element={
        user ? <Navigate to="/"/> : <Login setUser={setUser}/>
      }
      /> */}
     
      
  {/* <Route  
      path="/register" 
      element={
        user ? <Navigate to="/login"/> : <Register setUser={setUser}/>
      }
      />
        <Route path="/login" element={<Login setUser={setUser}/>} />

        <Route  
      path="/login" 
      element={
        user ? <Navigate to="/"/> : <Login setUser={setUser}/>
      }
      /> */}
      {/* burada login olmadan bir basha esas sehifeye getmek mehdudlasdirilir(slash "/" vasitesi ile) */}
      {/* <Route
      path="/"
      element={
        user ? <Home setUser={setUser}/> : <Navigate to="/login" />}
      /> */}

    <Route exact path="/" element={<Navbar />}>
      <Route index={true} element={<Home />} />

      {/* <Route
      path="/"
      element={
        user ? <Home setUser={setUser}/> : <Navigate to="/login" />}
      /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      
      <Route path="/basket" element={<Basket />} />
      <Route path="/like" element={<Like />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* <Route  
      path="/product-detail/:id" 
      element={
        user ? <ProductDetail setUser={setUser}/> : <Navigate to="/"/>
      }
      /> */}

      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/computers" element={<Computers />} />
      <Route path="/phones" element={<Phones />} />
      <Route path="/cameras" element={<Cameras />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/games" element={<Games />} />
      <Route path="/discount" element={<DiscountPages />} />
      <Route path="product-detail/:id" element={<ProductDetail />} />
    
    


  </Route> 
  {/* <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />  */}
        
</Routes>
    {/* ? Test Dropdown peoducts */}
    {/* <ProductList/> */}
    {/* <ProductList selectedCategory={selectedCategory} /> */}
     <ScrollToTop smooth color="#D10024" />
      <p style={{ marginTop: "50vh" }}>bottom</p>
    <Footer/>
    </div>
  );
}

export default App;

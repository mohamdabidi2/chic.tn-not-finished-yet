import React, { Component } from 'react';
import './App.css';
import Footer from './Component/footer'
import WorkShop from './Component/workshop'
 import Header from './Component/header'
 // import Signuplogin  from './Component/signUpLogin'
import DesignHomePage from './Component/DesignHomePage'

// import Introduction from './Component/introduction'
// import SlidShow from './Component/slidshow'
// import Product from './Component/product'
class App extends Component {
  render() {
    return (
      <div className="App">
 <Header/>
 {/* <Product/> */}
{/* 
<Introduction/> */}
<DesignHomePage/>
{/* <Signuplogin />
<SlidShow/> */}
<Footer/>
      </div>
    );
  }
}

export default App;

import Navbar from './components/navbar'
import Slideimg from './slideimg'
import Trending from './Trending';
import Footter from './footter';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import STUDENT from './sud'
import Tablelist from './components/tablelist'
import Edit from './components/edit'

import Line2 from './anewcompo/line2';

import FeaturedBrands from './anewcompo/Featured_Brands'


function App() {
  return (
    <div>
      <div>
      <Navbar/>
      <Line2/>
      <Slideimg/>
      <h1 style={{textAlign:'center', margin:'40px'}}>Our Trending products</h1>
      <Trending/>
      <FeaturedBrands/>
      <Footter/>
       {/* <STUDENT/>  */}
       {/* <Tablelist/> */}

      </div>
    </div>
  );
}

export default App;

import React from 'react';
import MainSearch from './MainSearch';
import HeaderNav from './HeaderNav';
import MainContent from './MainContent' ;
import {Consumer} from '../../JobContext';
import Footer from './Footer';
const HomePage  = () => (
  <div>
    <div id="top">
        <HeaderNav />
        <MainSearch />
    </div>
    <MainContent />

 
    {/* <Footer /> */}
  </div>

)

export default HomePage;

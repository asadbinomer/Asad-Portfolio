import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import PageNotFound from './component/pageNotFound/pageNotFound.jsx';
import ScrollToTop from './component/scrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;

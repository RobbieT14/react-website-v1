import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import LifeStyle from './components/pages/Lifestyle';
import Shop from './components/pages/Shop';
import Footer from './components/Footer';
import ReactGA from 'react-ga';
import ScrollToTop from './components/ScrollToTop';


const TRACKING_ID = "UA-192097633-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/lifestyle' exact component={LifeStyle} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;

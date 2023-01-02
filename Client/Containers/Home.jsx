import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';

const Home = () => {

  return (
    <div className='home-container'>
      <Navigation />
      <h3>Welcome User!</h3>
      <HomeIsland />
    </div>
  )
}

export default Home;

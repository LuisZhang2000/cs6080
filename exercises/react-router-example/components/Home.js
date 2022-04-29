import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
    const generateRndInt = () => {
        return Math.floor(Math.random() * (100 - 1) + 1)
    }
    
  return <>
    <Link to={`/post/${generateRndInt()}`}>Click to go to random post</Link>
  </>;
}

export default Home;

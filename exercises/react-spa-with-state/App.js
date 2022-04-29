import styles from './App.module.css';
import React, { useState } from 'react';

const HomePage = () => {
  return <div>Home Page</div>;
}

const PricingPage = () => {
  return <div>Pricing Page</div>;
}
const FAQPage = () => {
  return <div>FAQ Page</div>;
}
const GalleryPage = () => {
  return <div>Gallery Page</div>;
}


function App() {
  const [page, setPage] = useState('Home');
  return (
    <>
    {['Home', 'Pricing', 'FAQ', 'Gallery'].map((thisPage, index) => (<>
        {index !== 0 && <> | </>} 
        <a 
          class={page !== thisPage && styles.navlink}
          onClick={() => setPage(thisPage)}
        >
          {thisPage}
        </a>
      </>
    ))}
      {page === 'Home' && <HomePage />}
      {page === 'Pricing' && <PricingPage />}
      {page === 'FAQ' && <FAQPage />}
      {page === 'Gallery' && <GalleryPage />}
    </>
  );
}

export default App;

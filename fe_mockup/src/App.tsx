import Card from './Card.tsx'; // Menggunakan ekstensi .tsx untuk file komponen
import Card2 from './card2.tsx';
import Footer from './footer.tsx';
import Navbar from './navbar.tsx'; // Menggunakan ekstensi .tsx untuk file komponen
import React from 'react';
import './index.css';

function App() {
    return (
      <>
    <Navbar />
    <Card />
    <Card2 />
    <Footer />
      </>
    );
  }
  
  export default App;
  
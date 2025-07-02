import React from 'react';
import './styles.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WeatherCard from './components/WeatherCard.jsx';

function App() {
  return (
    <>
      <Header />
      <WeatherCard />
      <Footer />
    </>
  );
}

export default App;

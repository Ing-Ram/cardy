import React from 'react';
import Card from './Components/card';
import './App.css';




const cardData = {
  card1:  {
    cardName: "Chad Ingram",
    cardDescription: "The Original O.G.",
    cardImage: "chadingram",
  },
  card2:  { 
    cardName: "Olivia Ingram",
    cardDescription: "Lil O.G.",
  },
  card3: {
    cardName: "Mallory Ingram",
    cardDescription: "Fun Sized O.G.",
  },
  card4: {
    cardName: "Chloe Ingram",
    cardDescription: "Bady O.G.",
  },
};

function App() {
  return (
    <div className="card-container">
      <Card {...cardData.card1} />
      <Card {...cardData.card2} />
      <Card {...cardData.card3} />
      <Card {...cardData.card4} />
    </div>
  );



}

export default App;

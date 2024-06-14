import './App.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero/';
import Box from './components/box/Box';
import Over from './components/over/Over';
import HelloFresh from './components/WhyHelloFresh/HelloFresh';
import chicken from "./components/images/chicken.svg";
import whatsoever from "./components/images/whatsoever.svg";
import reviews from "./components/images/reviews.svg";
import affordable from "./components/images/affordable.svg";

function App() {
  const data = [
    { id: 1, img: chicken, title: "No skimpin’ on the chicken!", info: "Or steak, or fish, or plant protein." },
    { id: 2, img: whatsoever, title: "No commitment whatsoever", info: "Skipping weeks or cancelling is super easy." },
    { id: 3, img: reviews, title: "The most 5-star reviews", info: "Our huge recipe selection wows week after week." },
    { id: 4, img: affordable, title: "Fresh and affordable", info: "Chef-created deliciousness from $7.49 per meal." }
  ];

  return (
    <>
      <Nav />
      <Hero />
      <HelloFresh data={data} />
      <Box/>
      <Over/>
    </>
  )
}

export default App

import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { originals, action, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries } from './urls';
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />

    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      {/**Navbar */}
      <Nav />
      {/**Banner componant */}
      <Banner />
      {/**Row componant */}
      <Row 
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow  //we are pasreing this to render it in Row.css 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;

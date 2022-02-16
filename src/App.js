import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
     <Row title = "NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow = {true}
     />
     <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title = "Horrow Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title = "Romance" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     </div>
  );
}

export default App;

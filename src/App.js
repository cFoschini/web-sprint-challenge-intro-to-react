/* eslint-disable no-undef */
import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';



const CharDiv = styled.div`
margin: 0 auto;
box-sizing: border-box;
width: 60%;
`;

const CharHeader = styled.h1`
color: green;
`;




const App = () => {
 const [charInfo, setCharInfo] = useState(null)
 useEffect(() => {
   axios.get('https://swapi.dev/api/people/')
   .then(res => {
     setCharInfo(res.data);
   })
   .catch(err => {
     console.log('Error Error Error', err);
   })
 }, [])
 return (
  <div className="App">
    <CharHeader className="Header">Where's Obi Juan Kobe?</CharHeader>
    <CharDiv>
      {
        charInfo && 
        <>
          {
            charInfo.map((character, index) => {
              return <Character key={index} info={character}/>
            })
          }
        </>
      }
    </CharDiv>
  </div>
);
}


export default App;

import {useEffect, useState } from 'react'
import './App.css'
//import getGifs from './services/getGifs';
//import Gifs from './Components/Gifs';
import ListOfGifs from './Components/ListOfGifs';

// const GIFS = [
// 'https://media3.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47khn4vply5l87hdwj0mdwkcr1l4bgsuk1411494j9&rid=200w.webp&ct=g',
// 'https://media1.giphy.com/media/EatwJZRUIv41G/giphy.webp?cid=ecf05e47khn4vply5l87hdwj0mdwkcr1l4bgsuk1411494j9&rid=giphy.webp&ct=g'
// ];
// const DIFGIFS = [
//   'https://media2.giphy.com/media/jUwpNzg9IcyrK/200.webp?cid=ecf05e47vlj52z6xtxyrtkrv6evt0e6dsljo427e63q4x2l5&rid=200.webp&ct=g',
//   'https://media2.giphy.com/media/3TCBh8i6H3bz2/200.webp?cid=ecf05e4712vfdtfdajjexzgok3i3a1oezcxd6o88yowuk7g7&rid=200.webp&ct=g'
//   ];

function App() {
  const [gifs, setGifs] = useState([]);
  // useEffect(function (){
  //   setGifs(DIFGIFS);
  // },[]);

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='motorhead'/>
      </section>
    </div>
  );
}

export default App
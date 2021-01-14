import React, {useState, useEffect} from 'react'

import './App.css';
import SearchInput from './Components/SearchInput/index';

function App() {


const apiUrl = 'https://kitsu.io/api/edge/'


const [info, setInfo] = useState({


});

const [text, setText] = useState('');

useEffect(() => {

  console.log(text);
  if(text){
    fetch( `${apiUrl}anime?filter[text]=${text}` )
    .then((response) => response.json())
    .then((response) =>{
      setInfo(response)
      
    });
  }
}, [text]);



  return (
    <div className="App">
      <h1>App AnimeJS</h1>
      <SearchInput value={text} 
      onChange={(str)=> setText(str)}></SearchInput>

    {info.data && (
      <ul className='animes-list'>
        {info.data.map((anime)=>(
          <li key={anime.id}>
            <img src={anime.attributes.posterImage.small}></img>
            {anime.attributes.canonicalTitle}
          </li>
        ))}
      </ul>
    )}

    </div>
  );
}

export default App;

import React, {useState} from 'react'

import './App.css';
import SearchInput from './Components/SearchInput/index';

function App() {

const [text, setText] = useState('');



  return (
    <div className="App">
      <h1>App AnimeJS</h1>
      <SearchInput value={text} 
      onChange={(str)=> setText(str)}></SearchInput>
    </div>
  );
}

export default App;

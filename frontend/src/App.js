import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SiteList } from './components/SiteList';
import { NameForm } from './components/NameForm';
import { Search } from './components/Search';

function App() {
  //const [getMessage, setGetMessage] = useState({})
  const [username, setUsername] = useState(0)

  /* useEffect(()=>{
    axios.get('http://localhost:5000/usrnameapi').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, []) */
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        
      </header>
      
    </div>
    
  );
}

export default App;
import React from 'react';
import './App.css';
import Posts from "../features/Posts/Posts";
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Posts/>
    </div>
  );
}

export default App;

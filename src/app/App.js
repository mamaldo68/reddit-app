import React from 'react';
import './App.css';
import Posts from "../features/Posts/Posts";
import { loadPosts } from '../features/Posts/postsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispacth = useDispatch();
  return (
    <div className="App">
      <Posts/>
      <button type="button" onClick={() => dispacth(loadPosts())}> click me </button>
    </div>
  );
}

export default App;

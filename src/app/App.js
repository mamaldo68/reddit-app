import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import './App.css';
import Root from '../Root/Root';
import Subreddit from '../features/Subreddit/Subreddit';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path=":subreddit/:sortType" element={<Subreddit/>}/>
  </Route>
));

function App() {
  
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;

import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import './App.css';
import Root from '../Root/Root';
import Subreddit from '../features/Subreddit/Subreddit';
import Comments from '../features/Comments/Comments';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="r/:subreddit/:sortType" element={<Subreddit/>}/>
    <Route path="r/:subreddit/comments/:postId/:postTitle" element ={<Comments/>}/>
  </Route>
));

function App() {
  
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;

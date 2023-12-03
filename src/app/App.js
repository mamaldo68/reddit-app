import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import './App.css';
import Root from '../Root/Root';
import Posts from "../features/Posts/Posts";

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path=":subreddit" element={<Posts/>}/>
  </Route>
));

function App() {
  
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;

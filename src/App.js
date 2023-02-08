import React from 'react';
import './style.css';
import NewsFeed from './Components/NewsFeed.jsx';
import Nav from './Components/Nav.jsx';

const App = () =>{
  return(
    <div>
      <Nav/>
      <NewsFeed />
    </div>
  )
}
export default App;
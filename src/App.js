import React from 'react';
import { VideoListContainer } from './containers/VideoListContainer'
import { SearchContainer } from './containers/SearchContainer'
import './App.css';

const App = () => (
  <div>
    <SearchContainer /> 
    <VideoListContainer />
  </div>
)

export default App;

import React from 'react';
import { VideoListContainer } from './containers/VideoListContainer'
import { SearchContainer } from './containers/SearchContainer'
import { SelectedVideoContainer } from './containers/SelectedVideoContainer'
import './App.css';

const App = () => (
  <div>
    <SearchContainer /> 
    <SelectedVideoContainer />
    <VideoListContainer />
  </div>
)

export default App;

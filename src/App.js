import React, { Component } from 'react';
//import { Search, VideoList } from './components'
import { Search } from './components/Search'
import { VideoList } from './components/VideoList'
import { store } from './store.js'
import YTSearch from 'youtube-api-search'
import './App.css';
const API_KEY = 'AIzaSyAbHZLbTjKDUResramT3w3RIzNW7wZz1vo'

class App extends Component {

  handleInputChange = (value) => {
    store.dispatch({
      type: 'CHANGING_INPUT',
      q: value
    })
  }

  handleSubmit = (evt) => {
    const query = store.getState().q
    evt.preventDefault()
    YTSearch({key: API_KEY, term: query}, (videos) => {
      store.dispatch({
        type: 'UPDATING_VIDEOLIST',
        videos: videos
      })
    })
  }

  render() {
    return (
      <div>
        <Search handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} /> 
        <VideoList videos={store.getState().videos}/>
      </div>
    );
  }
}

export default App;

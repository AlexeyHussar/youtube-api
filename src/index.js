import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { appReducer } from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
	<Provider store={createStore(appReducer)} >
	  <App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();

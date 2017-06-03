import { combineReducers, createStore } from 'redux'

const qReducer = (state = '', action) => {
	if(action.type === 'CHANGING_INPUT') {
		return action.q
		console.log(state)
	}
	return state
}

const videoReducer = (state = [], action) => {
	if(action.type === 'UPDATING_VIDEOLIST') {
		return action.videos
		console.log(state)
	}
	return state
}

const appReducer = combineReducers({
	q: qReducer,
	videos: videoReducer
})

export const store = createStore(appReducer)


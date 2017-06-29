import { combineReducers } from 'redux'

const q = (state = '', action) => {
	if(action.type === 'CHANGING_INPUT') {
		console.log(state)
		return action.q
	}
	return state
}

const videoItems = (state = {}, action) => {
	switch(action.type) {
  	case 'UPDATING_VIDEOLIST':
  		console.log(state)
    	return {
      	...state,
        videos: action.videos
      }
    case 'SELECTING_VIDEO':
    	return {
      	...state,
        currentVideoId: action.currentVideoId
      }
    default:
    	return state  
  }
}

export const appReducer = combineReducers({
	q,
  videoItems
})



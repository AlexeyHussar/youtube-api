import { connect } from 'react-redux'
import { Search } from '../components/Search'

const mapStateToProps = (state) => {
	return {
		term: state.q
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onYTDispatch: (videos) => {
			dispatch({
		   	type: 'UPDATING_VIDEOLIST',
	   		videos: videos 
	   	})
	  },
	  onInputDispatch: (value) => {
	  	dispatch({
	  		type: 'CHANGING_INPUT',
	  		q: value
	  	})
	  }
	}
}

export const SearchContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)



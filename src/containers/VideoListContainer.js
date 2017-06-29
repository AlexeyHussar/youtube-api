import { connect } from 'react-redux'
import { VideoList } from '../components/VideoList'

const mapStateToProps = (state) => {
	return {
		currentVideoId: state.videoItems.currentVideoId,
		videos: state.videoItems.videos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onVideoSelect: (id) => {
			dispatch({
				type: 'SELECTING_VIDEO',
				currentVideoId: id
			})
		}
	}
}

export const VideoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(VideoList)
import { connect } from 'react-redux'
import { ChosenOne } from '../components/ChosenOne'

const mapStateToProps = (state) => {
	return {
		videos: state.videoItems.videos,
    currentVideoId: state.videoItems.currentVideoId
  }
}

export const SelectedVideoContainer = connect(
  mapStateToProps,
  null
)(ChosenOne)
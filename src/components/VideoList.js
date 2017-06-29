import React from 'react'
import { VideoItem } from './VideoItem'
import { SelectedVideoContainer } from '../containers/SelectedVideoContainer'

export const VideoList = ({ videos, onVideoSelect, currentVideoId }) => {
	if (videos) { 
		return (
			<ul>
			  {videos.map(video => 
			    <VideoItem 
			 			key={video.etag}
			 			video={video}
			 			onClick={() => {
			 				onVideoSelect(video.id.videoId)
			 				//return <SelectedVideoContainer />
			 				if(currentVideoId) {
			 					return <SelectedVideoContainer />
			 				}
			 			}}
			 	  />
			 	)}
			</ul>
		)
	}
	return <div>Wait for search...</div>
}

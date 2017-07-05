import React from 'react'
import { VideoItem } from './VideoItem'

export const VideoList = ({ videos, onVideoSelect, currentVideoId }) => {

	if (videos) { 
		return (
			<aside className='primary-aside'>
				<ul>
				  {videos.map(video => 
				    <VideoItem 
				 			key={video.etag}
				 			video={video}
				 			onClick={() => onVideoSelect(video.id.videoId)}
				 	  />
				 	)}
				</ul>
			</aside>	
		)
	}

	return <div>Wait for search...</div>
}

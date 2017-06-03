import React from 'react'
import { VideoItem } from './VideoItem'

export const VideoList = ({ videos, onVideoSelect }) => {
	const videoItems = videos.map(video => {
		return (
			<VideoItem 
				key={video.etag}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		)
	})
	return (
		<ul>
			{videoItems}
		</ul>
	)
}
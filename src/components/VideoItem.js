import React from 'react'

export const VideoItem = ({ video, onVideoSelect }) => {
	const imageURL = video.snippet.thumbnails.default.url
	return(
		<li onClick={() => onVideoSelect(video)}>
			<div>
				<image src={imageURL} />
				<div>{video.snippet.title}</div>
			</div>
		</li>	
	)
}

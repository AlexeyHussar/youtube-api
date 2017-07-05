import React from 'react'

export const VideoItem = ({ video, onClick }) => {
	const imageURL = video.snippet.thumbnails.medium.url
	return(
		<li className='listItem' onClick={onClick}>
			<div>
				<img src={imageURL} alt='Video_Shortcut' />
				<div>{video.snippet.title}</div>
			</div>
		</li>	
	)
}

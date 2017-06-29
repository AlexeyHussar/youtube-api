import React from 'react'

export const ChosenOne = ({ videos, currentVideoId/*, dispatch */}) => {
  /*const selectedVideo = videos.find(video => 
  	video.id.videoId === currentVideoId
  )*/

  const selectedVideo = currentVideoId
  const url = `https://www.youtube.com/embed/${selectedVideo}` 
  return <iframe src={url} title='selectedVideoFrame'></iframe>
}




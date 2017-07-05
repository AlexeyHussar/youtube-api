import React from 'react'

export const ChosenOne = ({ videos, currentVideoId }) => {

  const selectedVideo = currentVideoId
  const url = `https://www.youtube.com/embed/${selectedVideo}`
  
  if(currentVideoId) { 
    return <iframe className='selectedVideo' src={url} title='selectedVideoFrame'></iframe>
  } 
  
  return <div></div>
}




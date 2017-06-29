import React from 'react'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyAbHZLbTjKDUResramT3w3RIzNW7wZz1vo'

export const Search = ({ term, onYTDispatch, onInputDispatch }) => {
	let input
	return (
		<form onSubmit={(evt) => {
					evt.preventDefault()
					YTSearch({ key: API_KEY, term: term }, (videos) => onYTDispatch(videos))
		}}>
			<input 
				ref={ node => input = node }
				onChange={() => onInputDispatch(input.value)}
			/>
			<button type='submit'>Search</button>
		</form>	
	)
}	



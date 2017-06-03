import React from 'react'

export const Search = ({ handleSubmit, handleInputChange }) => {
	let input
	return (
		<form onSubmit={handleSubmit}>
			<input 
				ref={node => input = node}
				onChange={() => handleInputChange(input.value)}
			/>
			<button type='submit'>Search</button>
		</form>	
	)
}	
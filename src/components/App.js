import React from 'react'

import Joke from './Joke'
import jokesData from '../jokesData'

function App () {
	const jokeComponents = jokesData.map(joke => <Joke key={joke.id} joke={joke} />)
	return (
		<div>
			{jokeComponents}
		</div>
	)
}

export default App
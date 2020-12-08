import React from 'react'
import Joke from './Joke'

function App () {
	return (
		<div>
		<Joke joke={{punchline: 'It’s hard to explain puns to kleptomaniacs because they always take things literally.'}} />
		<Joke joke={{question: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus!"}} />
		<Joke joke={{question: "Did you hear about the mathematician who's afraid of negative numbers?", punchline: "He'll stop at nothing to avoid them!"}} />
		<Joke joke={{question: "Hear about the new restaurant called Karma?", punchline: "There’s no menu: You get what you deserve."}} />
		<Joke joke={{question: "Did you hear about the actor who fell through the floorboards?", punchline: "He was just going through a stage."}} />
		</div>
	)
}

export default App
import React from 'react'

function Joke(props) {
	return (
		<div className="jokes">
			<div className="joke">
            	<h3 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h3>
				<p>Answer: {props.joke.punchLine}</p>
				<hr/>
			</div>
		</div>
	)	
}
export default Joke
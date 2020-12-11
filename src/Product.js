import React from 'react'

function Product(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<p></p>
			<p>{props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.description}</p>
			<hr />
		</div>
	)
}

export default Product
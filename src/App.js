import React from 'react'
import Product from './Product'
import productData from './productData'

function App() {
	const productComponents = productData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
	return (
		<div>
			{productComponents}
		</div>
	)
} 
export default App
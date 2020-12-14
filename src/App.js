import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends Component {
	constructor() {
		super()
		this.state = {
			todos: todosData
		}
	}

	render() {
		const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
		return (
			<div>
				{todoComponents}
			</div>
		)
	}
}

export default App
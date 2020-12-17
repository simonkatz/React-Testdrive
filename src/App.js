import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isChicken: true,
            isSeafood: false,
            isPork: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target;
        
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            }) 
        :
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName" 
                        value={this.state.firstName} 
                        placeholder="First Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="lastName" 
                        value={this.state.lastName} 
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        name="age" 
                        value={this.state.age} 
                        placeholder="Age" 
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Gender</label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male" }
                        onChange={this.handleChange}
                    /> Male
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female" }
                        onChange={this.handleChange}
                    /> Female
                    <br />
                    
                    <select 
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please select destination --</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    <br />
                    
                    <input 
                        type="checkbox"
                        name="isChicken"
                        onChange={this.handleChange}
                        checked={this.state.isChicken}
                    /> Chicken
                    <br />
                    
                    <input 
                        type="checkbox"
                        name="isSeafood"
                        checked={this.state.isSeafood}
                        onChange={this.handleChange}
                    /> Seafood
                    
                    <br />
                    
                    <input 
                        type="checkbox"
                        name="isPork"
                        checked={this.state.isPork}
                        onChange={this.handleChange}
                    /> Pork
                    
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName}, {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <br/>
                    Chicken: {this.state.isChicken ? "Yes" : "No"}
                    <br/>
                    Seafood: {this.state.isSeafood ? "Yes" : "No"}
                    <br/>
                    Pork: {this.state.isPork ? "Yes" : "No"}
                </p>
            </main>
        )
    }
}

export default App

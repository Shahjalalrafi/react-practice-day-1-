import React, {Component} from 'react'
import './style.css'

class State extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            count : 0
        }
    }

    handleIncrease = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const {count} = this.state
        return(
            <div>
                <h1>count: {count}</h1>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease} disabled={count === 0? true: false}>-</button>
            </div>
        )
    }
}



export default State;
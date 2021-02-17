import React, {Component} from 'react'

class EVENT_BINDING extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.handleIncrease = this.handleIncrease.bind(this)
    }

    handleIncrease () {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrease} disabled={this.state.count === 5 ? true : false}>increase</button>
            </div>
        )
    }
}

export default EVENT_BINDING;
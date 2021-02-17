
import React, {Component} from 'react'
// import './style.css'

class EVENT_HANDLING_FUNCTION extends Component{

    constructor(props) {
        super(props)

        this.state = {
            changeValue : ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            changeValue: e.target.value
        },() => {
            console.log(this.state.changeValue)
        })
       
    }

    

    render() {
        return(
            <div>
                <input onChange={this.handleOnChange} type="text"/>
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}

export default EVENT_HANDLING_FUNCTION
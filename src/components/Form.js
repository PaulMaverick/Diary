import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            date: '',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState ({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {title, date, body } = this.state;

        return (
            <div>
                <form>
                    <div className='uppergrid'>
                    <label id="labelTitle">Title:</label>
                    <label id='labelDate'>Date:</label>
                        <input type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={this.handleChange}/>
                    </div>
                    <div className='middleGrid'>
                    <input 
                            placeholder='Enter Title'
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <textarea
                            placeholder="How's your day?"
                            type="textarea"
                            name="body"
                            id="body"
                            rows="5"
                            value={body}
                            onChange={this.handleChange}/>
                    </div>
                </form>
                <button onClick={this.submitForm} id="submitBtn">Submit</button>
            </div>
        )
    }
}

export default Form
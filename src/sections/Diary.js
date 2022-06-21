import React, { Component } from 'react';
import Entries from '../components/Entries'
import Form from '../components/Form'


class Diary extends Component {
  

    state = {
      entries:[
       
      ]
    }
  
    removeEntry = index => {
      const { entries } = this.state
  
      this.setState({
        entries: entries.filter ((entry, i) => {
          return i !== index
        })
      })
    }
  
    handleSubmit = entry => {
      this.setState({ entries: [...this.state.entries, entry]})
    }
  
    render () {
      const { entries } = this.state
      return (
        <div>
            <div>
              <div className='diaryHeader'>
              <h1>My Diary</h1>
              </div>
              <Form handleSubmit={this.handleSubmit}/>
              <Entries entryData={entries} removeEntry={this.removeEntry}/>
            </div> 
        </div>
      );
    }
  }
  
  export default Diary;
  
import React, { Component } from 'react';
import Diary from './sections/Diary';
import ToDoList from './sections/ToDoList';
import './App.css'
import Appbar from './components/Appbar';




class App extends Component {
  

 
  render () {
    
    return (
      <div>
        <Appbar/>
        <div className="App">
          <div className='diaryBody'>
            <Diary/>
            
          </div>
          <div className='todolistBody'>
            <ToDoList/>
          </div>  
        </div>
      </div> 
    );
  }
}

export default App;

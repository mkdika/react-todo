import React, { Component } from 'react'
import './App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Task from '../components/Cards/Task'
import Complete from '../components/Cards/Complete'

class App extends Component {

  state = {
    tasks: [
      {
        id: '1',
        content: 'Call wife',
        isComplete: false
      },
      {
        id: '2',
        content: 'Pay debt',
        isComplete: false
      },
      {
        id: '3',
        content: 'Buy new gundam',
        isComplete: false
      },
      {
        id: '4',
        content: 'Email bos for new contract',
        isComplete: false
      }
    ],
    isTaskActive: true
  }

  tabClickHandler = (isTaskActive) => {
    this.setState({isTaskActive: isTaskActive})
  };




  render() {
    let content = null
    if (this.state.isTaskActive) {
      content = <Task tasks={this.state.tasks}/>
    } else {
      content  = <Complete tasks={this.state.tasks}/>
    }

    return (
      <div className="App">
        <Header
          tasks={this.state.tasks}
          isTaskActive={this.state.isTaskActive}
          tabClick={this.tabClickHandler}/>

        {content}

        <Footer/>
      </div>
    )
  }
}

export default App;

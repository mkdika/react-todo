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
        isComplete: false,
        editMode: false
      },
      {
        id: '2',
        content: 'Pay debt',
        isComplete: false,
        editMode: false
      },
      {
        id: '3',
        content: 'Buy new gundam',
        isComplete: false,
        editMode: false
      },
      {
        id: '4',
        content: 'Email bos for new contract',
        isComplete: true,
        editMode: false
      }
    ],
    isTaskActive: true
  }

  generateRandomId = () => Math.random().toString(36).substr(2, 5)

  tabClickHandler = (isTaskActive) => {
    this.setState({isTaskActive: isTaskActive})
  };

  addTaskHandler = () => {
    const new_id = this.generateRandomId()
    const new_task = {
      id: new_id,
      content: '',
      isComplete: false,
      editMode: true
    }
    const tasks = [...this.state.tasks]
    tasks.splice(0, 0, new_task)

    this.setState({tasks: tasks})
  }

  statusChangedHandler = (id, status) => {
    const taskIndex = this.state.tasks.findIndex(t => {
      return t.id === id
    })

    const task = {
      ...this.state.tasks[taskIndex]
    }

    task.isComplete = status

    const tasks = [...this.state.tasks]
    tasks[taskIndex] = task

    this.setState({tasks: tasks})
  }

  editModeHandler = (id, status) => {
    const taskIndex = this.state.tasks.findIndex(t => {
      return t.id === id
    })

    const task = {
      ...this.state.tasks[taskIndex]
    }

    task.editMode = status

    const tasks = [...this.state.tasks]
    tasks[taskIndex] = task

    this.setState({tasks: tasks})
  }

  changeHandler = (event, id) => {
    const taskIndex = this.state.tasks.findIndex(t => {
      return t.id === id
    })

    const task = {
      ...this.state.tasks[taskIndex]
    }

    task.content = event.target.value

    const tasks = [...this.state.tasks]
    tasks[taskIndex] = task

    this.setState({tasks: tasks})
  }

  render() {
    let content = null
    if (this.state.isTaskActive) {
      content = <Task tasks={this.state.tasks}
                      statusChange={this.statusChangedHandler}
                      editModeChange={this.editModeHandler}
                      changed={this.changeHandler}/>
    } else {
      content  = <Complete tasks={this.state.tasks}
                           statusChange={this.statusChangedHandler}/>
    }

    return (
      <div className="App">
        <Header
          tasks={this.state.tasks}
          isTaskActive={this.state.isTaskActive}
          tabClick={this.tabClickHandler}
          addTask={this.addTaskHandler}
          editMode
          />

        {content}

        <Footer/>
      </div>
    )
  }
}

export default App;

import React from 'react';

const header = props => {

  const task_number = props.tasks.filter(task => !task.isComplete).length
  const complete_number = props.tasks.length - task_number

  return (
    <section className="hero is-link">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Demo ToDo
          </h1>
          <h2 className="subtitle">
            React.Js + Bulma
          </h2>
          <button onClick={props.addTask}
                  className="button is-primary is-medium is-rounded">New Task</button>
        </div>
      </div>
      <div className="tabs is-centered is-boxed is-medium">
        <ul>
          <li className={props.isTaskActive ? 'is-active' : ''}>
            <a href="/#" onClick={() => props.tabClick(true)}>
              <span>Active</span>&nbsp;&nbsp;
              <span className="tag is-rounded is-warning">{task_number}</span>
            </a>
          </li>
          <li className={props.isTaskActive ? '' : 'is-active'}>
            <a href="/#" onClick={() => props.tabClick(false)}>
              <span>Complete</span>&nbsp;&nbsp;
              <span className="tag is-rounded is-warning">{complete_number}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default header
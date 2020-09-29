import React from 'react';
import Card from './Card/Card';

const task = props => {
  const incomplete_tasks = props.tasks.filter(task => !task.isComplete)

  let content = null
  if (incomplete_tasks.length > 0) {
    content = incomplete_tasks.map((task) => {
      return (
        <Card key={task.id}
              task={task}
              statusChange={() => props.statusChange(task.id, true)}
              editModeChange={() => props.editModeChange(task.id, true)}
              showModeChange={() => props.editModeChange(task.id, false)}
              changed={(event) => props.changed(event, task.id)}/>
      )
    });
  }else {
    content = <p className="title is-3 is-spaced has-text-grey-lighter">Task not available</p>
  }

  return (
      <div className="columns is-multiline is-centered">
        <div className="column is-4">
          <section className="section">
            {content}
          </section>
        </div>
      </div>
  )
}

export default task;
import React from 'react';
import Card from './Card/Card';

const complete = props => {

  const complete_tasks = props.tasks.filter(task => task.isComplete);

  let content = null;
  if (complete_tasks.length > 0) {
    content = complete_tasks.map((task) => {
      return (
        <Card key={task.id}
              task={task}
              statusChange={event => props.statusChange(task.id, false)} />
      )
    })
  }else {
     content = <p className="title is-3 is-spaced has-text-grey-lighter">Completed task not available</p>
  }

  return (
    <div>
      <div className="columns is-multiline is-centered">
        <div className="column is-4">
          <section className="section">
            {content}
          </section>
        </div>
      </div>
    </div>
  )
}

export default complete

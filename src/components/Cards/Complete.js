import React from 'react';

const complete = props => {

  const complete_tasks = props.tasks.filter(task => task.isComplete)

  let content = null
  if (complete_tasks.length > 0) {
    content = (
      <section className="section">
        <div className="container pb-5">
          <div className="card">
            <div className="card-content">
              <div className="content has-text-grey-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Redo</a>
            </footer>
          </div>
        </div>
      </section>
    )
  }else {
     content = (
      <section className="section">
         <p className="title is-3 is-spaced has-text-grey-lighter">Completed task not available</p>
      </section>
     )
  }

  return (
    <div>
      <div className="columns is-multiline is-centered">
        <div className="column is-4">
          {content}
        </div>
      </div>
    </div>
  )
}

export default complete

import React from 'react';

const task = props => {
  const incomplete_tasks = props.tasks.filter(task => !task.isComplete)

  let content = null
  if (incomplete_tasks.length > 0) {
    content = (
      <section className="section">
        <div className="container pb-5">
          <div className="card">
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Done</a>
            </footer>
          </div>
        </div>
        <div className="container pb-5">
          <div className="card">
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Done</a>
            </footer>
          </div>
        </div>
        <div className="container pb-5">
          <div className="card">
            <div className="card-content no-padding">
              <textarea className="textarea is-info"></textarea>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Cancel</a>
              <a href="#" className="card-footer-item">Save</a>
            </footer>
          </div>
        </div>
      </section>
    )
  }else {
    content = (
      <section className="section">
        <p className="title is-3 is-spaced has-text-grey-lighter">Task not available</p>
      </section>
    )
  }

  return (
      <div className="columns is-multiline is-centered">
        <div className="column is-4">
            {content}
        </div>
      </div>
  )
}

export default task;
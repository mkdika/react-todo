import React from 'react';

const card = props => {

  let body = null
  let footer = null
  if (props.task.editMode) {
    body = (
      <div className="card-content no-padding">
        <textarea className="textarea is-info" defaultValue={props.task.content} onChange={props.changed} ></textarea>
      </div>
    )
    footer = (
      <footer className="card-footer">
        <a href="/#" onClick={props.showModeChange} className="card-footer-item">OK</a>
      </footer>
    )
  }else {
    body = (
      <div className="card-content">
        <div className={props.task.isComplete ? 'content has-text-grey-light' : 'content'}>
          {props.task.content}
        </div>
      </div>
    )
    if (props.task.isComplete) {
      footer = (
        <footer className="card-footer">
          <a href="/#" onClick={props.statusChange} className="card-footer-item">Redo</a>
        </footer>
      )
    } else {
      footer = (
        <footer className="card-footer">
          <a href="/#" onClick={props.editModeChange} className="card-footer-item">Edit</a>
          <a href="/#" onClick={props.statusChange} className="card-footer-item">Done</a>
        </footer>
      )
    }
  }

  return (
    <div className="container pb-5">
      <div className="card">
        {body}
        {footer}
      </div>
    </div>
  );
}

export default card;
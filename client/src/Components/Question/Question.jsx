import React, { Component } from 'react'
import Answer from '../Answer/Answer';

export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="question__container">
          <div className="question__prompt">
            What is David's Last Name?
          </div>
          <div className="question__category">
            Personal
          </div>
          <div className="question__answers">
          {
            [1,2,3,4].map(answer=><Answer/>)
          }
          </div>
        </div>
      </div>
    )
  }
}

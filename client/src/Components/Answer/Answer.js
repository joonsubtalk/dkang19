import React from 'react'

const Answer = (props) => {
  const {text} = props;
  const textSizeClassName = text && text.length < 35
    ? 'answer__shortText'
    : 'answer__text';
  return (
    <div className="answer">
      <div className="answer__container">
        <div className="answer__choice">
          <div className="answer__letter">A</div>
        </div>
        <div className={textSizeClassName}>Lorem ipsum dolor sit amet craas afsd.</div>
      </div>
    </div>
  )
}

export default Answer

import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'


function Form(props) {

  const { newQuestion, newTrueAnswer, newFalseAnswer } = props
  console.log(props)
  const onChange = evt => {
    props.inputChange(evt.target)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz({newQuestion, newTrueAnswer, newFalseAnswer})
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => ({
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer,

})

export default connect(mapStateToProps, actionCreators)(Form)

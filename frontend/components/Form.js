import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'
 

function Form(props) {

  const { newQuestion, newTrueAnswer, newFalseAnswer } = props
  // console.log(props)
  const onChange = evt => {
    props.inputChange(evt.target)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz({newQuestion, newTrueAnswer, newFalseAnswer})
    props.resetForm()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      {newQuestion <2 || newTrueAnswer <2 || newFalseAnswer <2 ? <button disabled id="submitNewQuizBtn">Submit new quiz</button> : <button id="submitNewQuizBtn">Submit new quiz</button>}
      {/* <button id="submitNewQuizBtn">Submit new quiz</button> */}
    </form>
  )
}

const mapStateToProps = state => ({
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer,

})

export default connect(mapStateToProps, actionCreators)(Form)

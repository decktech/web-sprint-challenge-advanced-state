// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, INPUT_CHANGE, RESET_FORM } from './action-types'

const initialWheelState = {
  wheelNum: 0
}
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return ({
        ...state,
        wheelNum: state.wheelNum=== 5 ? state.wheelNum = 0 : state.wheelNum + 1
      })
    case MOVE_COUNTERCLOCKWISE:
      return ({
        ...state,
        wheelNum: state.wheelNum=== 0 ? state.wheelNum = 5 : state.wheelNum - 1
      })
  }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return (console.log('something'),{
        ...state,
        // newQuestion: action.payload.id === "newQuestion" ? action.payload.value : '',
        // newTrueAnswer: action.payload.value,
        newFalseAnswer: 'test',
      })

  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

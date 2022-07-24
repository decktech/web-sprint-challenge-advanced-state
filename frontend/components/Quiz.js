import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, postAnswer, selectAnswer, setQuiz } from '../state/action-creators'

export function Quiz(props) {

  const { message, selected, currentQuiz } = props
  

  useEffect (()=> {
    if(currentQuiz === null) {
      props.fetchQuiz()
    }
  }, [])

  const onSubmit = () => {
    props.postAnswer({currentQuiz, selected})
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            {/* <div id="quizAnswers">
              <div className={selected === currentQuiz.answers[0].answer_id ? "answer selected" : "answer"}>
                {currentQuiz.answers[0].text}
                <button onClick={()=> props.selectAnswer(currentQuiz.answers[0].answer_id)}>
                  {selected === currentQuiz.answers[0].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={selected === currentQuiz.answers[1].answer_id ? "answer selected" : "answer"}>
                {currentQuiz.answers[1].text}
                <button onClick={()=> props.selectAnswer(currentQuiz.answers[1].answer_id)}>
                  {selected === currentQuiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div> */}

            {selected === null ? <button disabled id="submitAnswerBtn"> Submit answer</button> : <button onClick={onSubmit}id="submitAnswerBtn">Submit answer</button>}
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => (console.log(state),{
  message: state.infoMessage.message,
  selected: state.selectedAnswer.selected,
  currentQuiz: state.quiz.currentQuiz
})

export default connect(mapStateToProps, { fetchQuiz, setQuiz, postAnswer, selectAnswer })(Quiz)

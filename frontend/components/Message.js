import React from 'react'
import { connect } from 'react-redux'

function Message(props) {
  return <div id="message">{props.message}</div>
}

const mapStateToProps = state => {
  return console.log(state),{
    ...state,
    message: state.infoMessage.message
  }
  
}

export default connect(mapStateToProps, { })(Message)
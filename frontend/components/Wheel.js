import React from 'react';
import { connect } from 'react-redux';

import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {

  console.log(props.wheelNum)

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.wheelNum === 0 ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{props.wheelNum === 0 ? 'B' : ''}</div>
        <div className={props.wheelNum === 1 ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{props.wheelNum === 1 ? 'B' : ''}</div>
        <div className={props.wheelNum === 2 ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{props.wheelNum === 2 ? 'B' : ''}</div>
        <div className={props.wheelNum === 3 ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{props.wheelNum === 3 ? 'B' : ''}</div>
        <div className={props.wheelNum === 4 ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{props.wheelNum === 4 ? 'B' : ''}</div>
        <div className={props.wheelNum === 5 ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{props.wheelNum === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={()=> props.moveCounterClockwise()}id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={()=> props.moveClockwise()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => (console.log(state), {
  wheelNum: state.wheel.wheelNum
})

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)
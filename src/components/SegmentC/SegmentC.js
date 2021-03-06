import React from 'react';
import './SegmentC.css'

const SegmentC = props => {

  let topDivStyle = props.input === 1 ? {
    borderRightColor: '#ff3b19'
  } : {}

  let bottomDivStyle = props.input === 1 ? {
    borderLeftColor: '#ff3b19'
  } : {}

  return (
    <div className="segment-c">
      <div className="trapezoid-shape-left-C" style={topDivStyle}></div>
      <div className="trapezoid-shape-right-C" style={bottomDivStyle}></div>
    </div>
  )
}

export default SegmentC;
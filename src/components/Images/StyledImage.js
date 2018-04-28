import React from 'react'

const StyledImage = (props) => {
  // options: left right center main fit medium small
  const spanClass = "image " + props.options;

  return (
    <span className={spanClass}>
      <img src={props.src} />
    </span>
  )
}

export default StyledImage

import React from 'react'

const PostImage = (props) => {
  // options: left right center main fit medium small
  const spanClass = "image " + props.options;

  return (
      <span class={spanClass}>
        <img src={props.src} />
      </span>
  )
}

export default PostImage

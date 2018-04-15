import React from 'react'

const Feature = (props) => {
  return (
    <section>
      <span className={props.feature.icon_class}></span>
      <h4>{props.feature.title}</h4>
      <p>{props.feature.blurb}</p>
    </section>
  );
}

export default Feature

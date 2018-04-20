import React from 'react'
import Content, { HTMLContent } from '../Content'

const Banner = (props) => {
  const content = props.content;

  return (
    <section id="banner">
      <header className="major">
        <span className="icon fa-tree fal style2"></span>
        <h1>{content.title}</h1>
        <h3>{content.subtitle}</h3>
        <HTMLContent content={content.blurb} />
      </header>
    </section>
  );
}
export default Banner

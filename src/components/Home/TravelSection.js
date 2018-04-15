import React from 'react'
import Link from 'gatsby-link'
import BlogPostPreview from '../Blog/BlogPostPreview'

const TravelSection = (props) => {
  const content = props.content;

  return (
    <section id="two" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>{content.travel_section_title[0].text}</h2>
          <p>{content.travel_section_subtitle[0].text}</p>
          <p>{content.travel_section_blurb[0].text}</p>
        </header>
        <section className="spotlights">
          {props.posts.map(edge =>
            <BlogPostPreview node={edge.node} />
          )}
        </section>
        <footer className="major">
          <ul className="actions">
            <li><a href="#" className="button">{content.travel_section_call_to_action[0].text}</a></li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default TravelSection

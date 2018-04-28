import React from 'react'
import Link from 'gatsby-link'
import BlogPostCard from '../Blog/BlogPostCard'

const TravelSection = (props) => {
  const content = props.content;
  const posts = props.posts;

  return (
    <section id="two" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </header>
        <section className="spotlights">
          {posts.map(edge =>
            <BlogPostCard post={edge.node} key={edge.node.id} />
           )}
        </section>
        <footer className="major">
          <ul className="actions">
            <li><a href="/tags/travel/" className="button">{content.callToAction}</a></li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default TravelSection

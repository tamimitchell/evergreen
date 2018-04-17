import React from 'react'
import Link from 'gatsby-link'
import BlogPostPreview from '../Blog/BlogPostPreview'

const TravelSection = (props) => {
  return (
    <section id="two" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Travel is my life</h2>
          <p>I'm a full time RVer with my pup Belle, chasing a full life and new adventures.</p>
          <p>This blog is my attempt to record and share my life as I go.</p>
        </header>
        <section className="spotlights">
          {props.posts.map(edge =>
            <BlogPostPreview node={edge.node} key={edge.node.id}/>
          )}
        </section>
        <footer className="major">
          <ul className="actions">
            <li>
              <Link to="blog" className="button">More Posts</Link>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default TravelSection

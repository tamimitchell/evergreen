import React from 'react'
import rehypeReact from 'rehype-react'
import Link from 'gatsby-link'
import PostImage from './Blog/PostImage'
import TwoColumnImageGrid from './Images/TwoColumnImageGrid'

export const PostContent = ({ content, className }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "post-link": Link,
      "post-image": PostImage,
      "two-column-image-grid": TwoColumnImageGrid
    },
  }).Compiler

  return (
    <div>
      {renderAst(content)}
    </div>
  )

}

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content

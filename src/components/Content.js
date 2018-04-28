import React from 'react'
import rehypeReact from 'rehype-react'
import Link from 'gatsby-link'
import StyledImage from './Images/StyledImage'
import TwoColumnImageGrid from './Images/TwoColumnImageGrid'

export const PostContent = ({ content, className }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "post-link": Link,
      "styled-image": StyledImage,
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

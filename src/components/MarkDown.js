import React from "react"
import ReactMarkdown from 'react-markdown'

const MarkDown = (attributes) => {
  const {className, children, ...remaining} = attributes
  return (
    <div
      className={className || 'markdown'}
    >
      <ReactMarkdown>
      {children}
      </ReactMarkdown>
    </div>
  )
}

export default MarkDown

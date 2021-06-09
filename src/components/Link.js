import React from "react"

const Link = ({ href, children, className = "" }) => {
  return (
    <a
      className={`text-som-green hover:text-som-black ${className}`}
      href={href}
    >
      {children}
    </a>
  )
}

export default Link

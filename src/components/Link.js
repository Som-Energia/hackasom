import React from "react"

const Link = ({ href, children }) => {
  return (
    <a className="text-som-green hover:text-som-black" href={href}>
      {children}
    </a>
  )
}

export default Link

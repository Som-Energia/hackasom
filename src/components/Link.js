import React from "react"

const Link = ({ href, children }) => {
  return (
    <a className="text-[#bbc82a] hover:text-black" href={href}>
      {children}
    </a>
  )
}

export default Link

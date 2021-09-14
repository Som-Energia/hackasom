import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

// TODO: Turn this into a dropdown
// TODO: Show language names instead of abreviations
export default function LanguageSelector({ siteTitle }) {
  const { language, languages, originalPath } = useI18next()
  return (
    <ul className="languages">
      {languages.map(lng => (
        <li
          key={lng}
          className={
            language === lng
              ? "bg-som-green text-white shadow rounded"
              : "text-som-black bg-white hover:rounded hover:bg-som-yellow"
          }
          style={{
            display: "inline",
          }}
        >
          <Link
            to={originalPath}
            language={lng}
            style={{
              paddingLeft: "5pt",
              paddingRight: "5pt",
              fontWeight: language === lng ? "bold" : "regular",
            }}
          >
            {lng}
          </Link>
        </li>
      ))}
    </ul>
  )
}

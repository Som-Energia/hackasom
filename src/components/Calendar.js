import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Calendar = props => {
  const { t } = useTranslation()
  const { items } = props
  return (
    <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-4">
      {items.map(item => (
        <div
          key={item.date}
          className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-8"
        >
          <div className="flex justify-center align-center text-lg font-medium text-gray-500 truncate text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span dangerouslySetInnerHTML={{ __html: t(item.date) }}></span>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mt-3">
              <p className="text-center text-2xl font-semibold text-som-black font-montserrat">
                {t(item.content)}
              </p>
            </div>
            <div className="text-gray-400 flex justify-center mt-4">
              <item.icon className="w-12 h-12" />
            </div>
          </div>
        </div>
      ))}
    </dl>
  )
}

export default Calendar

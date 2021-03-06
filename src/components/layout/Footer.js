import React from "react"
import { navigation } from "libs/utils"
import { useTranslation } from "gatsby-plugin-react-i18next"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map(item => (
            <div key={item.name} className="px-5 py-2">
              <a
                href="#"
                onClick={event => {
                  event.preventDefault()
                  scrollTo(`#${item.href}`)
                }}
                className="text-base font-medium text-gray-500 hover:text-som-black"
              >
                {t(item.name)}
              </a>
            </div>
          ))}
          <div className="px-5 py-2">
            <a
              href={t("AVIS_LEGAL_URL")}
              className="text-base font-medium text-gray-500 hover:text-som-black"
            >
              {t("AVIS_LEGAL")}
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href={t("PRIVACY_POLICY_URL")}
              className="text-base font-medium text-gray-500 hover:text-som-black"
            >
              {t("PRIVACY_POLICY")}
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; Som Energia {new Date().getFullYear()} | Made with{" "}
          <span className="text-lg text-som-green">????</span> and open source
        </p>
      </div>
    </footer>
  )
}

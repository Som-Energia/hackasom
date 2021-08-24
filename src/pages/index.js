import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Layout from "components/layout/Layout"

import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby';
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import scrollTo from "gatsby-plugin-smoothscroll"

import { navigation, faqs } from "libs/utils"
import Faqs from "../components/Faqs"
import MarkDown from "../components/MarkDown"
import Calendar from "../components/Calendar"
import { calendar } from "../libs/utils"

import LanguageSelector from "../components/LanguageSelector"

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout>
      <Helmet>
        <title>HackaSom | Som Energia</title>
      </Helmet>
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-20">
          <Popover>
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 md:justify-center"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Som Energia</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src={"/cuca.svg"}
                            alt=""
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex-grow"></div>
                    <div className="hidden md:flex md:space-x-10">
                      {navigation.main.map(item => (
                        <a
                          key={ item.name }
                          href="#"
                          onClick={event => {
                            event.preventDefault()
                            scrollTo(`#${item.href}`)
                          }}
                          className="font-medium text-gray-600 hover:text-som-black"
                        >
                          { t(item.name) }
                        </a>
                      ))}
                    </div>
                    <div className="md:flex-grow"></div>
                    <div className="hidden md:flex">
                      <LanguageSelector />
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src={"/cuca.svg"}
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3">
                        {navigation.main.map(item => (
                          <a
                            key={ item.name }
                            href="#"
                            onClick={event => {
                              event.preventDefault()
                              scrollTo(`#${item.href}`)
                            }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-som-black hover:bg-gray-50"
                          >
                            { t(item.name) }
                          </a>
                        ))}
                        <LanguageSelector />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-wide font-bold text-som-black sm:text-5xl md:text-6xl font-montserrat">
                <img
                  className="w-full lg:max-w-3xl m-auto px-3"
                  src={"/logo-hackasom-2021.png"}
                  alt={t("PAGE_TITLE")}
                  title={t("PAGE_TITLE")}
                />
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-0 md:text-xl md:max-w-3xl">
                { t("EVENT_DATES") }
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    onClick={event => {
                      event.preventDefault()
                      scrollTo("#inscripcions")
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-som-green hover:bg-som-black md:py-4 md:text-lg md:px-10"
                  >
                    { t("REGISTER_BUTTON") }
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    onClick={event => {
                      event.preventDefault()
                      scrollTo("#faqs")
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-som-green bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    { t("MORE_INFO_BUTTON") }
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className="py-16" id="hackasom">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h2 className="font-montserrat">
              <span className="block text-base text-center text-som-green font-semibold tracking-wide uppercase">
              { t("HACKASOM_TITLE") }
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-wide text-som-black sm:text-4xl">
              { t("HACKASOM_SUBTITLE") }
              </span>
            </h2>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              <MarkDown>
              { t("HACKASOM_CONTENT") }
              </MarkDown>
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-gradient-to-r from-som-yellow to-som-dark-green"
        id="calendar"
      >
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-7xl mx-auto mb-4">
            <h2 className="font-montserrat">
              <span className="block text-base text-center text-white text-opacity-95 font-semibold tracking-wide uppercase">
                { t("CALENDAR_TITLE") }
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-wide text-som-black sm:text-4xl">
                { t("CALENDAR_SUBTITLE") }
              </span>
            </h2>
            <Calendar items={calendar} />
          </div>
        </div>
      </section>

      <section className="py-16" id="dinamica">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-4">
            <h2 className="font-montserrat">
              <span className="block text-base text-center text-som-green font-semibold tracking-wide uppercase">
                { t("DYNAMIC_TITLE") }
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-wide text-som-black sm:text-4xl">
                { t("DYNAMIC_SUBTITLE") }
              </span>
            </h2>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              <MarkDown>
              { t("DYNAMIC_CONTENT_1") }
              </MarkDown>
            </p>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              <MarkDown>
              { t("DYNAMIC_CONTENT_2") }
              </MarkDown>
            </p>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              <MarkDown>
              { t("DYNAMIC_CONTENT_3") }
              </MarkDown>
            </p>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              <MarkDown>
              { t("DYNAMIC_CONTENT_4") }
              </MarkDown>
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-gradient-to-r from-som-yellow to-som-dark-green"
        id="tematica"
      >
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-4">
            <h2 className="font-montserrat">
              <span className="block text-base text-center text-white text-opacity-95 font-semibold tracking-wide uppercase">
                { t("TOPICS_TITLE") }
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-wide text-som-black sm:text-4xl">
                { t("TOPICS_SUBTITLE") }
              </span>
            </h2>
            <p className="mt-8 text-xl text-som-black leading-8">
              <MarkDown>
              { t("TOPICS_CONTENT") }
              </MarkDown>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" id="inscripcions">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-4">
            <h2 className="font-montserrat">
              <span className="block text-base text-center text-som-green font-semibold tracking-wide uppercase">
              { t("REGISTRATION_TITLE") }
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-wide text-som-black sm:text-4xl">
              { t("REGISTRATION_SUBTITLE") }
              </span>
            </h2>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              <MarkDown>
              { t("REGISTRATION_CONTENT_NOT_YET") }
              </MarkDown>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" id="faqs">
        <Faqs faqs={faqs} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query($language: String!) {
  locales: allLocale(filter: {ns: {in: ["index"]}, language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
}
`;

import React, { Fragment } from "react"
import { Link } from "gatsby"

import { useTranslation } from "gatsby-plugin-react-i18next"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import scrollTo from "gatsby-plugin-smoothscroll"

import { navigation } from "libs/utils"

import LanguageSelector from "../LanguageSelector"

const Menu = () => {
  const { t } = useTranslation()

  return (
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
                  <Link to="/">
                    <span className="sr-only">Som Energia</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={"/cuca.svg"}
                      alt=""
                    />
                  </Link>
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
                  <Link
                    key={item.name}
                    href={`#${item.href}`}
                    className="font-medium text-gray-600 hover:text-som-black"
                  >
                    {t(item.name)}
                  </Link>
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
                    <img className="h-8 w-auto" src={"/cuca.svg"} alt="" />
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
                    <Link
                      key={item.name}
                      href={`/#${item.href}`}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-som-black hover:bg-gray-50"
                    >
                      {t(item.name)}
                    </Link>
                  ))}
                  <LanguageSelector />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Menu

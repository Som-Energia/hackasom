import React, { Fragment } from "react"

import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import scrollTo from "gatsby-plugin-smoothscroll"

import { navigation } from "libs/utils"

import LanguageSelector from "../LanguageSelector"
import Menu from "./Menu"

const Header = () => {
  const { t } = useTranslation()

  return <Menu />
}

export default Header

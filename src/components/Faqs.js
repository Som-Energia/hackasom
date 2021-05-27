/* This example requires Tailwind CSS v2.0+ */
import React from "react"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Faqs({ faqs }) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold text-som-black sm:text-4xl font-montserrat">
            <span className="block text-base text-center text-som-green font-semibold tracking-wide uppercase">
              FAQS
            </span>
            <span className="mt-2 block tracking-wide">
              Preguntas frecuentes
            </span>
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map(faq => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-montserrat font-medium text-som-black">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

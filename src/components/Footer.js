import React, { memo } from 'react'

const Footer = memo(() => {
    return (
        <footer className="bg-background2 mb-0 mt-auto w-full">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        className="inline-block rounded-full bg-secondary p-2 text-primary shadow transition hover:bg-secondary sm:p-3 lg:p-4"
                        href="#MainContent"
                    >
                        <span className="sr-only">Back to top</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-secondary lg:justify-start">
	    	        <img src={process.env.PUBLIC_URL+"/arp-logo.png"} className="w-12 h-auto mr-5"/>
	    		<h1>AfricanRockPython</h1>
                        </div>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-text2 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                            consequuntur amet culpa cum itaque neque.
                        </p>
                    </div>
                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                        <li>
                            <a
                                className="text-text1 transition hover:text-text2"
                                href="/"
                            >
                                {" "}
                                About{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text1 transition hover:text-text2"
                                href="/"
                            >
                                {" "}
                                Services{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text1 transition hover:text-text2"
                                href="/"
                            >
                                {" "}
                                Projects{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-text1 transition hover:text-text2"
                                href="/"
                            >
                                {" "}
                                Blog{" "}
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright © 2022. All rights reserved.
                </p>
            </div>
        </footer>

    )
})

export default Footer

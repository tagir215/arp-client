import React, { memo } from 'react'

const Section = memo(() => {
    return (
        <section className="text-secondary bg-background">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">African Rock Python</h2>

                    <p className="mt-4 text-gray-300">
                        "African Rock Python" was made for learning purposes of creating a fullstack application
                        that uses most of the commonly used Design Patterns. The design patterns were implemented 
                        first and the application was built on top of it.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-background2 p-4">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Factories</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Abstract Method Factory is used to create different types of computer builds. 
                                The different implementatioin of the Abstract factory use create different ComputerInfo
                                objects that will be used to build various tiers of computers by budget.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-background2 p-4">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Strategies</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                In StrategyRegistry there are different Strategy pattern implementations that will use 
                                appropriate Factories to build correct tier Computer Builds. 
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-background2 p-4">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Records</h2>

                            <p className="mt-1 text-sm text-text2">
                                Application uses lot's of DTOs such as ComputerInfo, SelectedComponents and ComponentCollections,
                                since multiple classes depend on this information.

                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-background2 p-4">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Component Selecting</h2>

                            <p className="mt-1 text-sm text-text2">
                                AbstractComputerFactory will use the complicated ComponentSelector 
                                logic to select appropriate components. The Component Selector has implementations 
                                for all different component types seperatedly since the selection process might 
                                change in the future. ComponentFilterer will filter out Components that are too expensive
                                for the budget and also, components that are uncompatible with the ComponenEntities that 
                                have implemented the "CompatibilityComponent" interface.

                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-background2 p-4">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Cart</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                In the application there's a shopping cart style saving system, that
                                was mainly implemented for an excuse to implement more Design patterns such as
                                Facade, State and Observer.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="shrink-0 rounded-lg bg-background2 p-4">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                            </svg>
                        </span>

                        <div>
                            <h2 className="text-lg font-bold">Security</h2>

                            <p className="mt-1 text-sm text-text2">
                                For authentication I added Spring Security with basic JWT authentication 
                                setup. Technically a chain of responsibility 
                                Design Pattern was also added to the appliction, so the goal of using all of the Patterns 
                                was almost achieved.
                                I
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Section
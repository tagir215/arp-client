import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { checkAuthenticationStatus } from '../utils/AuthApi';

const Header = memo((props) => {

    const [authStatus, setAuthStatus] = useState(false);
    
    useEffect(() => {
        async function checkStatus() {
            const auth = await checkAuthenticationStatus();
            setAuthStatus(auth);
        }
        checkStatus();
    },[]);


  return (
    <>
        <header className="bg-background2 fixed w-full z-30" >
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-secondary" href="/">
	    	   <img src={process.env.PUBLIC_URL+"/arp-logo.png"} className="w-12 h-auto"/>
                    <span className="sr-only">Home</span>
                </a>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link
                                    className="text-text2 transition hover:text-text2"
                                    to="/"
                                >
                                    {" "}
                                    Home{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-text2 transition hover:text-text2"
                                    to="/Grid?type=basic&tier=budget&os=windows"
                                >
                                    {" "}
                                    App{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-text2 transition hover:text-text2"
                                    to={"/about"}
                                >
                                    {" "}
                                    About{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-text2 transition hover:text-text2"
                                    to="/contact"
                                >
                                    {" "}
                                    Contact{" "}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4 items-center">
                                <Link
                                    className=""
                                    to="/Cart"
                                >
                                    <img src={process.env.PUBLIC_URL + "/cart-logo.png"} alt="" className="w-8 filter invert"></img>
                              </Link>
                              {!authStatus && 
                                  <>
                                <Link
                                    className="block rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-secondary"
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <Link
                                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-secondary transition hover:text-secondary sm:block"
                                    to="/registration"
                                >
                                    Register
                                </Link>
                                  </>
                                  }
                                {authStatus &&
                                    <Link
                                        className=""
                                        to="/User"
                                    >
                                        <img src={process.env.PUBLIC_URL + "/user-logo.png"} alt="" className="w-8"></img>
                                    </Link>
                                }
                            </div>
                            <button className="block rounded bg-gray-100 p-2.5 text-text2 transition hover:text-text2 md:hidden">
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="h-16 bg-opacity-0"></div>
        </>

    )
})

Header.propTypes = {}

export default Header

import React, { memo, useEffect, useState } from 'react';
import Header from '../components/Header';
import ComputerFrom from '../components/ComputerFrom';
import Footer from '../components/Footer';
import { checkAuthenticationStatus } from '../utils/AuthApi';

const HomePage = memo(() => {


  return (
    <div>
        <Header/>
        <section>
            <div className="flex justify-center items-center space-x-10">
                <div className="max-w-md relative">
                    <img src={process.env.PUBLIC_URL+"logos/logo-springboot.png"} alt="" className="w-1/3 translate-y-1/2"></img>
                    <img src={process.env.PUBLIC_URL+"logos/logo-mysql.png"} alt="" className="w-1/3 mr-0 ml-auto -translate-x-1/3"></img>
                    <img src={process.env.PUBLIC_URL+"logos/logo-java.png"} alt="" className="w-1/2 scale-90 -translate-y-1/2 translate-x-1/3"></img>
                </div>
                <div className="max-w-sm">
                    <h2 className="font-bold text-8xl text-text1">Reliable Data</h2>
                    <p className="text-text2">This application will give you a prototype where you can start building your computer. We have gathered data using
                     Java Web Scraping technnologies like Selenium and created a server that will auto generate Computer Builds for you to start from.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-center items-center space-x-10">
                <div className="max-w-sm">
                    <h2 className="font-bold text-8xl text-text1">What You Want</h2>
                    <p className="text-text2">Select the computers type, tier, and it's operating systems, and some random generated assemblies will be provided for you.
                     If you want different results you can run the generation again.</p>
                </div>
                <div className="max-w-md relative">
                    <img src={process.env.PUBLIC_URL+"logos/logo-javascript.png"} alt="" className="w-1/3 translate-y-1/3 translate-x-full"></img>
                    <img src={process.env.PUBLIC_URL+"logos/logo-tailwind.png"} alt="" className="w-1/2 mr-0 ml-auto translate-x-10"></img>
                    <img src={process.env.PUBLIC_URL+"logos/logo-react.png"} alt="" className="w-1/3 -translate-y-1/2 translate-x-1/3"></img>
                </div>
            </div>
        </section>

        <ComputerFrom/>
        <Footer/>
    </div>
  )
})

export default HomePage
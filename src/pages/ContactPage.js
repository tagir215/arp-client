import React, { memo } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = memo(() => {
  return (
    <div>
        <Header/>
        <Contact/>
        <Footer/>
    </div>
  )
})

export default ContactPage
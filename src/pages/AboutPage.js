import React, { memo } from 'react'
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = memo(() => {
  return (
    <div>
        <Header/>
        <Section/>
        <Footer/>
    </div>
  )
})

export default AboutPage
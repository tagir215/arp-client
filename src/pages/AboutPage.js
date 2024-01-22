import React, { memo } from 'react'
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UMLDiagram from '../components/UMLDiagram';

const AboutPage = memo(() => {
  return (
    <div>
        <Header/>
          <Section />
          <UMLDiagram/>
        <Footer/>
    </div>
  )
})

export default AboutPage
import React from 'react'
import AboutBanner from '../../Components/AboutBanner/AboutBanner'
import AccordionFiability from '../../Components/AboutAccordions/AccordionFiability'
import AccordionRespect from '../../Components/AboutAccordions/AccordionRespect'
import AccordionService from '../../Components/AboutAccordions/AccordionService'
import AccordionSecurity from '../../Components/AboutAccordions/AccordionSecurity'


export default function About() {
  return (
    <div>      
      <AboutBanner/>
      <AccordionFiability/>
      <AccordionRespect/>
      <AccordionService/>
      <AccordionSecurity/>
    </div>
  )
}
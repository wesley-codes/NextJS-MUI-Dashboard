import React from 'react'
import {Box, useTheme} from "../../lib/mui"
import Header from '@/components/Header'
import AccordionItem from '@/components/Accordion'
export default function page() {
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Check out our frequently asked questions"/>
      <AccordionItem/>
      <AccordionItem/>

      <AccordionItem/>
      <AccordionItem/>
      <AccordionItem/>
      <AccordionItem/>

    </Box>
  )
}

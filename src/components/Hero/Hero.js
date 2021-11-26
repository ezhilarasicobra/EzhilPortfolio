import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
 
  function Hero(props) {
   const handleclick=(e)=>{
console.log(e)
window.open('https://drive.google.com/file/d/1u0j0OneFXoF-xNEzutWfjCdZzQlji1X6/view?usp=sharing')
   } 
    return (
      <div>
       <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
      Hi Welcome !!! This is  <br />
          Ezhilarasi T
        </SectionTitle>
        <SectionText>
        I am MERN Stack developer
        </SectionText>
        <Button onClick={handleclick}>

Resume
        </Button>
      </LeftSection>
    </Section>
  </> 
      </div>
    )
  }
  
  export default Hero
  

  

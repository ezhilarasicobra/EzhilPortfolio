import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
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
        <Button>
<a href='https://docs.google.com/document/d/1hZqYLDreydTP7iEGpOzkPXZqj-amkPr0/edit?usp=sharing&ouid=105244502179720508751&rtpof=true&sd=true'download="Ezhilarasi_Thirunavukkarasu-pdf.pdf" target="_blank" >
  Resume
</a>

        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
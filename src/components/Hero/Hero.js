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
<a href='https://drive.google.com/file/d/1v_M6Oog0pBqEasYqFg0YTPVovGJV_WDk/view?usp=sharing'download="Ezhilarasi_Thirunavukkarasu-pdf.pdf" target="_blank" >
  Resume
</a>

        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
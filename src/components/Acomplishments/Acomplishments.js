import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { Title: "Automation" , text: 'Have worked in more than 10 automation enhancements.'},
  { Title: "Interest", text: 'Interested in Learning AI integeration.', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements/Interests</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.Title}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

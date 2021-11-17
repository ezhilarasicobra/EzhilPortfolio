import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>About Me</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
             
      <li>
        <Link href="#about">
          <NavLink>Professional Experience</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ezhilarasicobra?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;

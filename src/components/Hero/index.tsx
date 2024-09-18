import React from 'react';
import { Hero, HeroTitle } from './styled';

const HeroComponent: React.FC = () => (
  <Hero>
    <div>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Hero>
);

export default HeroComponent;
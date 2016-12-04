import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Swatch from './Swatch';

const handleClick = () => console.log('🐳', 'swatch clicked');

storiesOf('Swatch', module)
  .add('default', () => (
    <Swatch />
  ))
  .add('coral', () => (
    <Swatch color="coral" />
  ))
  .add('size 50', () => (
    <Swatch color="coral" size={50} />
  ))
  .add('onClick', () => (
    <Swatch color="mediumvioletred" onClick={handleClick} />
  ))
  .add('yellowgreen', () => (
    <Swatch color="yellowgreen" />
  ));

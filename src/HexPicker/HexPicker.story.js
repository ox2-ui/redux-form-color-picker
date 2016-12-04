import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HexPicker from './HexPicker';

const input = {
  value: '#FE1D91',
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('HexPicker', module)
  .add('default', () => (
    <HexPicker input={input} />
  ));

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HexColorField from './HexColorField';

const input = {
  value: '#FE1D91',
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('HexColorField', module)
  .add('default', () => (
    <HexColorField input={input} />
  ));

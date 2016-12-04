import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ColorPickerChrome from './ColorPickerChrome';

const handleChange = (value) => console.log('🐳', value);

storiesOf('ColorPickerChrome', module)
  .add('default', () => (
    <ColorPickerChrome value={''} onChange={(value) => handleChange(value)} />
  ))
  .add('coral', () => (
    <ColorPickerChrome value={{ hex: '#FE8057' }} disableAlpha={true} onChange={(value) => handleChange(value)} />
  ));

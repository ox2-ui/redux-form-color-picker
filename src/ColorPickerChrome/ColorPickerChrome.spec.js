/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import ColorPickerChrome from './ColorPickerChrome';
import { assert } from 'chai';

describe('ColorPickerChrome', () => {
  it('should render a <ColorPickerChrome> element', () => {
    const wrapper = shallow(
      <ColorPickerChrome />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});

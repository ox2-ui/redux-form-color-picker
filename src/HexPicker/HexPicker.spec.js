/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import HexPicker from './HexPicker';
import { assert } from 'chai';

describe('HexPicker', () => {
  it('should render a <HexPicker> element', () => {
    const wrapper = shallow(
      <HexPicker />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});

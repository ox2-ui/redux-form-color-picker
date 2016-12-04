/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import Swatch from './Swatch';
import { assert } from 'chai';

describe('Swatch', () => {
  it('should render a <Swatch> element', () => {
    const wrapper = shallow(
      <Swatch />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});

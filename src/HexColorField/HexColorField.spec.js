/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import HexColorField from './HexColorField';
import { assert } from 'chai';

describe('HexColorField', () => {
  it('should render a <HexColorField> element', () => {
    const wrapper = shallow(
      <HexColorField />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});

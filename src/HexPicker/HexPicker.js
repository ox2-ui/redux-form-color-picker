import React, { PropTypes } from 'react';
import ColorPickerChrome from '@ox2/color-picker/ColorPickerChrome';

/**
 * Picker Component
 */
const Picker = ({ input }) => {
  return (
    <ColorPickerChrome
      value={{ hex: input.value }}
      disableAlpha={true}
      onChange={(value) => input.onChange(value.hex)}
    />
  );
};

Picker.propTypes = {
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your <input/> component.
   */
  input: PropTypes.any,
};

export default Picker;

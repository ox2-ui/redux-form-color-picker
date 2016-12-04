import React, { PropTypes } from 'react';
import { ChromePicker } from 'react-color';
import Swatch from '../Swatch';

const styles = {
  popover: {
    position: 'absolute',
    zIndex: '2',
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
};


class ColorPickerChrome extends React.Component {
  static propTypes = {
    /**
     *  Disbale alpha channel (opacity)
     */
    disableAlpha: PropTypes.any,
    /**
     * Callback function that is fired when the filter dialog is dismissed.
     */
    onChange: PropTypes.func,
    /**
     * Set color value
     */
    value: PropTypes.any,
  };

  state = {
    displayColorPicker: false,
    value: this.props.value || '',
  };

  componentWillReceiveProps= (nextProps) => {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (value) => {
      // this.setState({ color: color.rgb })
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({ value });
  };

  render() {
    const { disableAlpha } = this.props;
    const { displayColorPicker, value } = this.state;

    return (
      <div>
        <Swatch color={this.state.value.hex} onClick={ this.handleClick } />
        { displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose } />
          <ChromePicker disableAlpha={disableAlpha} color={ value } onChange={ this.handleChange } />
        </div> : null }
      </div>
    );
  }
}

export default ColorPickerChrome;

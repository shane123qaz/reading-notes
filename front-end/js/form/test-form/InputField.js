import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {

  onChangeHandler = (e) => {
    this.props.updateValue({value: e.target.value});
  };

  render() {

    return (
      <div>
        <input defaultValue={this.props.value} onChange={this.onChangeHandler}/>
        <label style={{color: 'red'}}>{this.props.error}</label>
      </div>
    );
  }
}

InputField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  updateValue: PropTypes.func.isRequired
};

export default InputField;
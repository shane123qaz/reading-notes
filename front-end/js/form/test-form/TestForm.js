import React from 'react';
import PropTypes from 'prop-types';
import withForm from '../withForm';
import {TestFieldA, TestFieldB} from './TestFields';
import FORM_CONSTANT from './formConstant';
import {anyOfFieldsIsEmpty} from './formValidators';

class TestForm extends React.Component {

  submitHandler = (e) => {
    e.preventDefault();
    // console.log('formData:', this.props.formData);
    this.props.submitForm();
  };

  render() {

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <TestFieldA/>
          <TestFieldB/>
          <button type='submit'>Submit</button>
          <label style={{color: 'blue'}}>{this.props.error}</label>
        </form>
      </div>
    );
  }
}

TestForm.propTypes = {
  formData: PropTypes.object.isRequired,
  error: PropTypes.string,
  submitForm: PropTypes.func.isRequired
};

export default withForm({
  name: FORM_CONSTANT.TEST_FORM,
  validators: [
    {
      errorMsg: '还有未填项',
      runner: anyOfFieldsIsEmpty(['test-field-a', 'test-field-b'])
    }
  ],
  defaultValues: {
    'test-field-a': 'test-a'
  }
})(TestForm);

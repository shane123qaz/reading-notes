import React from 'react';
import {each, merge, filter, debounce, isEmpty} from 'lodash';
import PropTypes from 'prop-types';
import {contextHelper, validatorRunner} from '../../helpers/formHelper';

/**
 * name: [string, required], formName, should be unique;;
 * registerFields: [function, required], used for register fields with default values, should return object with field names;
 *  eg: (props) => ({vin: props.vin, msg: ''})
 * validators: [array, options], used for validating form;
 *  eg: [{errorMsg: string/object, runner: (formData) => true/false}]
 *    - if errorMsg is string, value will be used for form level.
 *    - if errorMsg is object, value will be send to fields.
 */
const withForm = ({name, validators, registerFields = () => {}}) => (WrappedComponent) => {
  return class WithForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {formData: {value: registerFields(props), error: {}}, error: ''};
    }

    componentDidMount() {
      const {formData: {value}} = this.state;
      contextHelper.register(name, this.formDataHandler);

      each(value, (fieldValue, fieldName) => contextHelper.send(fieldName, {formName: name, value: fieldValue}));
    }

    componentWillUnmount() {
      contextHelper.unregister(name);
    }

    formDataHandler = ({name, value: fieldValue, error: fieldError}) => {
      const {formData: {value, error}} = this.state;
      const formData = {
        value: merge({}, value, {[name]: fieldValue}),
        error: merge({}, error, {[name]: fieldError})
      };

      this.setState({formData});
    };

    submitForm = (next) => {
      const {formData: {value}} = this.state;
      const error = validatorRunner(validators)(value);

      if (typeof error === 'object') {
        each(error, (fieldError, fieldName) => contextHelper.send(fieldName, {error: fieldError, formName: name}));
      } else {
        this.setState({error}, () => this.triggerNextIfNoError(next));
      }
    };

    triggerNextIfNoError = (next) => {
      const {formData: {error: fieldErrors, value}, error} = this.state;

      const hasFieldError = filter(fieldErrors, fieldError => !isEmpty(fieldError)).length > 0;
      if (!hasFieldError && isEmpty(error)) {
        next && next(value);
      }
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          submitForm={debounce(this.submitForm, 250)}
        />
      );
    }
  };
};

withForm.propTypes = {
  name: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf({
    errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    runner: PropTypes.func.isRequired
  }),
  registerFields: PropTypes.func.isRequired
};

export default withForm;
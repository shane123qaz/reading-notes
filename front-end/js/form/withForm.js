import React from 'react';
import _ from 'lodash';
import {contextHelper, validatorRunner} from '../../helpers/formHelper';

const withForm = ({name, validators, defaultValues = {}}) => (WrappedComponent) => {
  return class WithForm extends React.Component {
    constructor(props) {
      super(props);
      const defaultFormData = _.mapValues(defaultValues, value => ({value}));

      this.state = {formData: defaultFormData, error: ''};
    }

    componentDidMount() {
      contextHelper.register(name, this.formDataHandler);

      _.each(defaultValues, (value, name) => contextHelper.send(name, {value}));
    }

    componentWillUnmount() {
      contextHelper.unregister(name);
    }

    formDataHandler = ({name, value, error}) => {
      const formData = _.merge({}, this.state.formData, {[name]: {value, error}});

      this.setState({formData});
    };

    submitForm = () => {
      const error = validatorRunner(validators)(this.state.formData);

      this.setState({error});
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          submitForm={this.submitForm}
        />
      );
    }
  };
};

export default withForm;
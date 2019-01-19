import React from 'react';
import PropTypes from 'prop-types';
import {contextHelper, validatorRunner} from '../../helpers/formHelper';

const withField = ({name, formName, validators}) => (WrappedComponent) => {

  return class WithField extends React.Component {
    constructor(props) {
      super(props);

      this.state = {name, value: '', error: ''};
    }

    componentDidMount() {
      contextHelper.register(name, this.initializeField);
    }

    componentWillUnmount() {
      contextHelper.unregister(name);
    }

    updateValue = ({value}) => {
      const error = validatorRunner(validators)(value);


      this.setState({name, value, error}, () => contextHelper.send(formName, {name, value, error}));
    };

    initializeField = ({value, error}) => {
      this.setState({name, value, error});
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          updateValue={this.updateValue}
        />
      );
    }
  };
};

withField.propTypes = {
  defaultValue: PropTypes.string
};

export default withField;
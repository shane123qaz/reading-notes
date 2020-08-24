import React from 'react';
import PropTypes from 'prop-types';
import { contextHelper, validatorRunner } from '../../helpers/formHelper';

/**
 * name: [string, required], fieldName, should be unique;
 * validators: [array, options], used for validating field;
 * formName: [string, options], used for register field dynamically;
 * defaultValue: [string, options], used for register field dynamically;
 */
const withField = ({ name, validators, formName, defaultValue }) => (WrappedComponent) => {

    return class WithField extends React.Component {
        constructor(props) {
            super(props);

            this.state = { name, value: defaultValue, error: '', formName: '' };
        }

        componentDidMount() {
            const { name, value, error } = this.state;

            contextHelper.register(this.state.name, this.fieldValueHandler);
            formName && contextHelper.send(formName, { name, value, error });
        }

        componentWillUnmount() {
            contextHelper.unregister(name);
        }

        updateValue = ({ value }) => {
            const error = validatorRunner(validators)(value, this.props);

            this.setState({ name, value, error }, () => this.sendToForm({ name, value, error }));
        };

        fieldValueHandler = ({ value, error, formName }) => {
            this.setState({ name, value, error, formName });
        };

        clearErrorHandler = () => {
            const error = '';

            this.setState({ error }, () => this.sendToForm({ error }));
        };

        sendToForm = ({ name, value, error }) => {
            contextHelper.send(formName || this.state.formName, { name, value, error });
        };

        render() {
            return ( <
                WrappedComponent {...this.props } {...this.state }
                updateValue = { this.updateValue }
                clearError = { this.clearErrorHandler }
                />
            );
        }
    };
};

withField.propTypes = {
    name: PropTypes.string.isRequired,
    validators: PropTypes.arrayOf({
        errorMsg: PropTypes.string.isRequired,
        runner: PropTypes.func.isRequired
    }),
    formName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default withField;
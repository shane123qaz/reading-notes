import _ from 'lodash';

export const emptyValidator = _.isEmpty;
export const lengthValidator = (length) => (value) => _.size(value) > length;

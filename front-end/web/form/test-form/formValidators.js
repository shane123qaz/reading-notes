import _ from 'lodash';

export const anyOfFieldsIsEmpty = (names) => (formData) => {
  return _.filter(names, name => _.isEmpty(_.get(formData, `${name}.value`))).length > 0;
};
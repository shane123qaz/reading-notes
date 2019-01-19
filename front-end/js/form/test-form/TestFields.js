import InputField from './InputField';
import withField from '../withField';
import FORM_CONSTANT from './formConstant';
import {emptyValidator, lengthValidator} from './fieldValidators';

export const TestFieldA = withField({
  name: FORM_CONSTANT.TEST_FIELD_A,
  formName: FORM_CONSTANT.TEST_FORM,
  validators: [
    {
      errorMsg: '不能为空',
      runner: emptyValidator
    },
    {
      errorMsg: '字符长度不能大于10',
      runner: lengthValidator(10)
    }
  ]
})(InputField);

export const TestFieldB = withField({
  name: FORM_CONSTANT.TEST_FIELD_B,
  formName: FORM_CONSTANT.TEST_FORM
})(InputField);
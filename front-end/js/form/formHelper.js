import _ from 'lodash';
import {Subject} from 'rxjs';

export const contextHelper = {
  subjectList: {},

  register: function(name, callback) {
    if (!this.subjectList[name]) {
      const subject = new Subject();
      subject.subscribe({
        next: callback
      });
      this.subjectList[name] = subject;
      return true;
    }
    return false;
  },

  unregister: function(name) {
    const subject = this.subjectList[name];
    if (subject) {
      subject.complete();
      delete this.subjectList[name];
    }
    return true;
  },

  send: function(name, message) {
    const subject = this.subjectList[name];
    if (subject) {
      subject.next(message);
      return true;
    }
    return false;
  }
};

export const validatorRunner = (validators) => (value) => {
  return _.chain(validators)
    .filter(validator => validator.runner(value))
    .head()
    .get('errorMsg')
    .value();
};
import { filter, get } from 'lodash';
import { Subject } from 'rxjs';

/*eslint-disable */
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
        console.error(`Field/form name: ${name} is already exist`);
        return false;
    },

    unregister: function(name) {
        const subject = this.subjectList[name];
        if (subject) {
            subject.complete();
            delete this.subjectList[name];
            return true;
        }
        console.error(`Field/form name: ${name} is not exist`);
        return false;
    },

    send: function(name, message) {
        const subject = this.subjectList[name];
        if (subject) {
            subject.next(message);
            return true;
        }
        console.error(`Field/form name: ${name} is not exist`);
        return false;
    }
};
/*eslint-enable */

export const validatorRunner = (validators) => (value, options) => {
    const errors = filter(validators, validator => validator.runner(value, options));

    return get(errors, '0.errorMsg');
};
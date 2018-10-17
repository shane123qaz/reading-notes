const validate = require('jsonschema').validate;

const verify = (fileName) => (json) => {
    const schema = require(`../json-schema/${fileName}.json`);
    const errors = validate(json, schema).errors;
    console.log('json schema validate results: ', errors);
    return errors;
}

const test_case = { "first_name": "Helenq", "last_name": "Wang" };
verify("test-case-1")(test_case);
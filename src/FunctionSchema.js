class FunctionSchema {
    validator = (value) => typeof value === 'function'

    constructor(validators = [this.validator], args = []) {
        this.validators = validators;
        this.args = args;
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }
    expect(value) {
       return new FunctionSchema([...this.validators, (func) => func(this.args) === value], this.args);
    }
    arguments(args) {
        return new FunctionSchema(this.validators, args);
    }
}
export default FunctionSchema;
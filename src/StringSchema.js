class StringSchema {
    validator = (value) => typeof value === 'string'

    constructor(validators = [this.validator]) {
        this.validators = validators;
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value));
    }
    hasSpaces() {
        return new StringSchema([...this.validators, (string) => string.includes(' ')]);
    }
}
export default StringSchema;
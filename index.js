import StringSchema from './src/StringSchema.js';
import FunctionSchema from './src/FunctionSchema.js';

class Validator {
    string() {
        return new StringSchema();
    }
    function() {
        return new FunctionSchema();
    }
}
console.log('1-е задание');
const v = new Validator();
const schema = v.string();

console.log(schema.isValid(null)); // false
console.log(schema.isValid('')); // true
console.log(schema.isValid(true)); // false
console.log(schema.isValid('123')); // true
console.log(schema.isValid(0)); // false

const schema2 = v.string().hasSpaces();
console.log(schema2.isValid([])); // false;
console.log(schema2.isValid(' ')); // true;
console.log(schema2.isValid('Hexlet')); // false;
console.log('2-е задание');

const v2 = new Validator();
const schema3 = v2.function();

console.log(schema3.isValid(() => {})); // true;
console.log(schema3.isValid({})); // false;
console.log(schema3.isValid(console.log)); // true;

console.log('3-е задание');
const v3 = new Validator();

const schema4 = v3.function().expect('1');

console.log(schema4.isValid(() => '1')); // true;
console.log(schema4.isValid(() => 1)); // false;
console.log(schema4.isValid(1)); // false;

const schema5 = v3.function().arguments([1, 2, 3, 4, 5, 6, 7]).expect(1);

console.log(schema5.isValid({})); // false
console.log(schema5.isValid((args) => Math.min(...args))); // true;
console.log(schema5.isValid((args) => Math.max(...args))); // false
console.log(schema5.isValid(() => 1)); // true;
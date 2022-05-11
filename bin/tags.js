"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input_to_tag = exports.verifiable_tags = void 0;
exports.verifiable_tags = [
    {
        allowed_inputs: ['python', 'py', 'python3', 'python27'],
        tag: 'py'
    },
    {
        allowed_inputs: ['c', 'make'],
        tag: 'c'
    },
    {
        allowed_inputs: ['cpp', 'c++', 'cmake'],
        tag: 'cpp'
    },
    {
        allowed_inputs: ['golang', 'go'],
        tag: 'go'
    },
    {
        allowed_inputs: ['nodejs', 'js', 'javascript'],
        tag: 'js'
    },
    {
        allowed_inputs: ['node', 'ts', 'typescript'],
        tag: 'ts'
    }
];
const input_to_tag = (i) => {
    const matcher = exports.verifiable_tags.filter(tag => (tag.tag === i || tag.allowed_inputs.includes(i)));
    return matcher.shift().tag;
};
exports.input_to_tag = input_to_tag;

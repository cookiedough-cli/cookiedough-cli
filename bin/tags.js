// the list of allowed types to be set by a parsed config
const verifiable_tags = [
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

module.exports.map_input_to_tag = (i) => {
    const matcher = verifiable_tags.filter(tag => (tag.tag === i || tag.allowed_inputs.includes(i)));
    return matcher.shift().tag;
}
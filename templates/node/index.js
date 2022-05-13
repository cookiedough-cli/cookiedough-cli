module.exports = {
    type: 'node',
    language: 'commonjs',
    x_opts: {
        compiler: 'none',
        bundler: 'none',
        build_system: 'make',
        pkg: {
			process: 'npm',
            scripts: {
                'w:server': 'nodemon tools/dev-server',
                'dev': 'npm-run-all -p w:server'
            },
            dependencies: [
                'express',
                'html-chunk-loader'
            ],
            devDependencies: [
                'nodemon',
                'npm-run-all',
                'eslint'
            ]
        }
    },
};

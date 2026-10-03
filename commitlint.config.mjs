export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'refactor', 'test', 'a11y', 'chore', 'docs', 'perf', 'ci']
        ],
        'scope-case': [2, 'always', 'kebab-case']
    }
};

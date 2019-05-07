module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'indent': ['error', 4],
    // 'no-trailing-spaces': 'off',
    'space-infix-ops': 'off',
    'prefer-promise-reject-errors': 'off',
    'space-after-function-name': 'off',
    'space-before-function-paren': 'off',
    'eol-last': 'on'
    // 'linebreak-style': ['error', 'unix'],
    // 'quotes': ['error', 'double'],
    // 'semi': ['error', 'always'],

    // override default options for rules from base configurations
    // 'comma-dangle': ['error', 'always'],
    // 'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    // 'no-console': 'off',
}
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jasmine: true,
    atomtest: true
  },
  extends: [
    'standard'
  ],
  globals: {
    atom: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "handle-callback-err": "off",
    camelcase: "off"
  }
}

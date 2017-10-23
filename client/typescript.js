/*
 * Copyright (c) 2017 Dimebox
 * https://dimebox.com
 */

/*
 * Module
 */

const config = {
  env: {
    browser: true,
    node: false,
  },
  extends: [
    'tslint-config-airbnb',
    '../lib/rules/jsdoc',
  ].map(require.resolve),
  rules: {
    'align': [true, 'parameters'],
  },
};

/*
 * Module exports
 */

module.exports = config;

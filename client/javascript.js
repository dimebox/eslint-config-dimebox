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
    'eslint-config-airbnb/base',
    '../lib/rules/common',
    '../lib/rules/common_javascript',
  ].map(require.resolve),
  rules: {
    // custom rules
  },
};

/*
 * Module exports
 */

module.exports = config;

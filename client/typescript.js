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
    '../lib/rules/common',
    '../lib/rules/common_typescript',
  ].map(require.resolve),
  rules: {
    // custom rules
  },
};

/*
 * Module exports
 */

module.exports = config;

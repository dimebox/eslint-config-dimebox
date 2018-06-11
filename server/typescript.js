/*
 * Copyright 2018 Dimebox - All Rights Reserved
 * https://dimebox.com
 */

/*
 * Module
 */

const config = {
  env: {
    browser: false,
    node: true,
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

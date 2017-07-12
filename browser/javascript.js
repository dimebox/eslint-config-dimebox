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
    'airbnb/base',
    ...[
      '../lib/rules/jsdoc',
    ].map(require.resolve),
  ],
  rules: {},
};

/*
 * Module exports
 */

module.exports = config;

/*
 * Copyright (c) 2017 Dimebox
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

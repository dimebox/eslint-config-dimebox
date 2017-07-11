/*
 * Copyright (c) 2017 Dimebox
 * https://dimebox.com
 */

/*
 * Module
 */

const config = {
  extends: [
    'airbnb/base',
  ],
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'require-jsdoc': [
      'error', {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true
        }
      }
    ]
  },
};

/*
 * Module exports
 */

module.exports = config;

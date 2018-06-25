/*
 * Copyright 2018 Dimebox - All Rights Reserved
 * https://dimebox.com
 */

/*
 * Module
 */

const config = {
  rules: {
    'require-jsdoc': [
      'error', {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'no-warning-comments': [
      'warn',
    ],
    'curly': [
      'error',
      'all',
    ],
  },
};

/*
 * Module exports
 */

module.exports = config;

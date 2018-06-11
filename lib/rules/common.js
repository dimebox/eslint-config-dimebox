/*
 * Copyright (c) 2017 Dimebox
 * https://dimebox.com
 */

/*
 * Module
 */

const config = {
  rules: {
    'require-jsdoc': [
      error, {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'comma-dangle': [
      error, {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'ignore',
      },
    ],
  },
};

/*
 * Module exports
 */

module.exports = config;

## 0x00. ES6 Basics
This project is about ES6 Basics  

## Objectives
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Setup
### Install NodeJS 12.11.x
This version of Node is very old, and in the changing world of development  
you don't want to replace your current version of node with an older version.  
To solve this, we need to use Node Version Manager (nvm) to be able to manage  
and use multiple versions of node depending on the requirement for our project.  


1. Install nvm through the APT package manager in Ubuntu  
Open your terminal and execute the following series of commands to install  
and source the newly installed nvm (this is easier than restarting your terminal emurator)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm -v
```  


2. Install the required node version through nvm  
Now, with nvm you can install the desired node version without messing  
with the existing one(s).  
Execute the the following series of commands to install the desired node version.  
Note: This will install and set your terminal session to use the newly installed  
node version for the current terminal session.
```bash
nvm install v12.11
nvm use v12.11
node -v
npm -v
```

### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel and ESList by using the supplied  
package.json and run `npm install`.
#### Configuration files
Add following files below to your project directory:  

`package.json`  
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```  

`babel.config.js`  
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
}
```

`.eslintrc.js`  
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

Finally, run `npm install` from the terminal of your project folder  
to install all necessary project dependencies.  

Note: Most of these packages if not all of them are deprecated - they are used here  
For the sole purpose of learning and the project requirements. If you are using this guide  
to do this project then you can safely ignore the warnings, but if you are looking for a  
guide to do your project, I recommend you visit the sites (links in the references section)  
to check how to use the latest versions of the packages.

## References
<a href="https://github.com/nvm-sh/nvm">Node Version Manager Repository (nvm)</a><br>
<a href="https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager">Node Package Manager (npm) </a><br>
<a href="https://eslint.org/docs/latest/use/getting-started">Getting Started with ESLint</a><br>
<a href="https://jestjs.io/docs/getting-started">Getting Started with Jest</a><br>
<a href="https://nodejs.org/en/learn">Learn Node.js</a><br>

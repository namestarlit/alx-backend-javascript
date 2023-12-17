## 0x04. Typescript
This project is about TypeScript

## Learning Objectives
- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript

## Setup
### Install NodeJS 12.11.x
This version of Node is very old, and in the changing world of development
you don't want to replace your current version of node with an older version.
To solve this, we need to use Node Version Manager (nvm) to be able to manage
and use multiple versions of node depending on the requirement for our project.


**1. Install nvm from the nvm repository**

Open your terminal and execute the following series of commands to install
and source the newly installed nvm (this is easier than restarting your terminal emurator)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm -v
```


**2. Install the required node version through nvm**

Now, with nvm you can install the desired node version without messing
with the existing one(s).
Execute the the following series of commands to install the desired node version.

**Note**: This will install and set your terminal session to use the newly installed
node version for the current terminal session.

```bash
nvm install v12.11
nvm use v12.11
node -v
npm -v
```

### Configuration Files
`package.json`
```json
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

`tsconfig.json`
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}
```

`.eslintrc.js`
```js
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

`webpack.config.js`
```js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

Finally, run `npm install` from the terminal of your project folder
to install all necessary project dependencies.

**Note**: Most of these packages if not all of them are deprecated - they are used here
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
<a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html">TypeScript Documentation</a><br>

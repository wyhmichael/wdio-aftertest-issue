import {Test, TestResult} from '@wdio/types/build/Frameworks';

exports.config = {
  specs: ['./specs/**/*.ts'],
  exclude: [],
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],

  baseUrl: 'https://www.google.com/',
  logLevel: 'trace',
  outputDir: 'logs',
  waitforTimeout: 3000,

  afterTest(test: Test, context: any, result: TestResult) {
    if (result.passed !== true) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const util = require('util');
      console.debug(util.inspect(test), typeof test);
    }
  },

  // uncomment mocha part and comment out jasmine part to switch frameworks
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },
  // framework: 'jasmine',
  // // Options to be passed to Jasmine.
  // // See also: https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-jasmine-framework#jasmineopts-options
  // jasmineOpts: {
  //   //
  //   // Jasmine default timeout
  //   defaultTimeoutInterval: 10000,
  //   //
  //   // The Jasmine framework allows it to intercept each assertion in order to log the state of the application
  //   // or website depending on the result. For example, it is pretty handy to take a screenshot every time
  //   // an assertion fails.
  //   //
  //   // The Jasmine framework allows it to intercept each assertion in order to log the state of the application
  //   // or website depending on the result. For example, it is pretty handy to take a screenshot every time
  //   // an assertion fails.
  //   expectationResultHandler: (passed: any, assertion: any) => {
  //     // do something
  //   },
  //   //
  //   // Make use of Jasmine-specific grep functionality
  //   grep: null,
  //   invertGrep: null
  // },
  reporters: ['spec'],
  autoCompileOpts: {
    //
    // To disable auto-loading entirely set this to false.
    autoCompile: true, // <boolean> Disable this to turn off autoloading. Note: When disabling, you will need to handle calling any such libraries yourself.
    //
    // If you have ts-node installed, you can customize how options are passed to it here:
    // Any valid ts-node config option is allowed. Alternatively the ENV Vars could also be used instead of this.
    // See also: https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // See also RegisterOptions in https://github.com/TypeStrong/ts-node/blob/master/src/index.ts
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    },
    // If you have tsconfig-paths installed and provide a tsConfigPathsOpts
    // option, it will be automatically registered during bootstrap.
    tsConfigPathsOpts: {
      baseUrl: './'
    },
    //
    // If @babel/register is installed, you can customize how options are passed to it here:
    // Any valid @babel/register config option is allowed.
    // https://babeljs.io/docs/en/babel-register#specifying-options
    babelOpts: {
      ignore: []
    }
  }
};

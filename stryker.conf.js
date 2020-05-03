
module.exports = function(config){
  config.set({
    files: [

        { pattern: 'test/unitTest/sampleProgram.js', mutated: true, included: false},
        'test/unitTest/sampleProgramTest.js'
    ],
    testRunner: 'mocha',
    testFramework: 'mocha',
    testSelector: null,
    reporter: ['clear-text', 'progress'],
    plugins: ['stryker-mocha-runner']
  });
}

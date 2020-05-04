JS Frameworks implementation by Amitesh kumar

cypress : 
Cypress is a next generation front end testing tool built for the modern web. 
This enables you to write faster, easier and more reliable tests.

Installation :

npm install cypress --save-dev  npx cypress open

Add under package.json file to run directly from terminal using  

npm run cypress:open 
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
cypress tests can be found at :

cypress/integration/examples/cypressTest.js


supertest :
Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features

Installation :
npm install superagent

api superTest can be found at :

test/apiTest/funcB.js 

test  can be run through :

 "test": "mocha 'test/apiTest/funcB.js'"
 
 different validations are done on CRUD operation  like validating status code ,headers,body,nodes and used asserts to perform assertion operations

strykerio :
A Muation testing tool which adds Bugs, or mutants, are automatically inserted into your production code. Your tests are ran for each mutant. If your tests fail then the mutant is killed. If your tests passed, the mutant survived. The higher the percentage of mutants killed, the more effective your tests are.

Installation :

npm install -g stryker-cli

npm install --save-dev @stryker-mutator/core

Configuration :stryker init 

under scripts in package.json file add once stryker config is built :

 "stryker": "stryker -c stryker.conf.js"  
 
 sample code and test cases can be found at :
 
 test/unitTest 
 
To run the stryker :
  
npm run stryker 

stryker can generate different types of reports like clear text ,html etc

lighthouseCI :

Performance testing tool 

Lighthouse CI is a set of commands that make continuously running, asserting, saving, and retrieving Lighthouse results as easy as possible.

The node CLI (npm install -g @lhci/cli) runs Lighthouse, asserts results, and uploads reports.

The node server (npm install @lhci/server) stores results, compares reports, and displays historical results with a dashboard UI.

Compare two versions of your site to find improvements and regressions of individual resources.

Installation :

$ npm install lighthouse --save-dev

add under scripts for any website perfomance test :

"scripts": {
  "lighthouse:ci": "node_modules/lighthouse/lighthouse-cli/index.js \
  --output-path=./lighthouse-report.html --quiet \
  --chrome-flags='--headless' websitename"
}

running through terminal :  

npm run lighthouse:ci

and it will create a HTML report that we can publish in our CI.

Using Budget.json :

Use a performance budget to assert thresholds for performance metrics. budget.json supports three types of budgets:

Timing budgets: Assert thresholds for time-based performance metrics like First Contentful Paint, Maximum First Input Delay, and Speed Index.
Resource counts: Assert thresholds for the quantity of resources on a page. These thresholds can be defined per resource type or for the page overall.
Resource sizes: Assert thresholds for the transfer size of resources on a page. These thresholds can be defined per resource type or for the page overall.

artilleryio :
Artillery is a modern, powerful & easy-to-use solution for load testing and functional testing.

Installation :
npm install -g artillery
Running quick test :
artillery quick --count 10 -n 20 https://artillery.io/
This command will create 10 "virtual users" each of which will send 20 HTTP GET requests to https://artillery.io/.

Configuration can be done in .yml format  which can be found at under root directory :  

sampleartillery.yml 

Running thorugh terminal :
 add under scripts :
"artillery": "artillery run sampleartillery.yml", then run command :
-	npm run artillery 
As Artillery runs the test, an intermediate report will be printed to the terminal every 10 seconds, followed by an aggregate report at the end of the test.
Istanbul :
A Javascript code coverage tool written in JS
Installation :
npm i -D nyc
Configuration and running  :
	   {
  "scripts": {
    "test": "mocha",
    "coverage": "nyc npm run test"
  }
For reporting : nyc --reporter=lcov --reporter=text-summary ava
Run tests : npm run test 


 


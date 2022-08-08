# Cucumber Business Feature Tests

## Intent

The goal of these tests is to test business features to provide a certain level of confidence that things 
do what they should when major parts of the code base change.

### Guidelines

- Small number of tests that test things that cannot be already covered by unit and code level integrations tests
- These tests require an environment to run
- Delete tests if you can. The fewer, the better
- Write very clear tests that describe intent from a business point of view
- Do not test too much i.e. do not test queries and authorisation together. Test authorisation and queries logic separately
- Not for day to day testing. Goal is to use these tests as a quality gate in a CI/CD pipeline
- Must mimic production, not for step by step debugging purposes. If errors occur that are too hard to solve then create better logging or analytics

## To execute the tests locally

- run the command `npm run start`
- run the command `npm run test:business`.

## To debug a scenario in Visual Studio Code or intellij

If you need to run a debugger you can do the following

- If using VSCode.json then copy the launch information from .vscode/launch.json
- If using intellij then create a new node.js Run configuration and set the following information
  - Working Directory = apiTests
  - Javascript file = node_modules/.bin/cucumber-js
  - Application parameters - cucumber/features/**/\*.feature --require "cucumber/steps/**/_.ts" --require "cucumber/hooks/\*\*/_.ts" --require-module ts-node/register --format-options "{\"snippetInterface\":\"async-await\"}" --format json:cucumber/reports/cucumberReport.json --format summary
- tag the scenario with `@only` and `@debug`
- set the breakpoints in the typescript code
- Start debugging

## To run only specific scenarios

- tag the scenario(s) with `@only`

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript and linting errors

- run the command `npm run build`.

## To view the html report of the last run

- run the command `npm run report`.

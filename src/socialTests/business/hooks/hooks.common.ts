import {After, Before, BeforeAll, ITestCaseHookParameter, setDefaultTimeout} from '@cucumber/cucumber'

// tslint:disable:no-console

setDefaultTimeout(180000)

// tslint:disable:only-arrow-functions

Before({tags: '@ignore'}, async function () {
  return 'skipped'
})

Before({tags: '@debug'}, async function () {
  this.debug = true
})

Before({tags: '@unit'}, async function () {
  return 'skipped'
})

Before({tags: '@manual'}, async function () {
  return 'skipped'
})

/**
 * Before each scenario hook
 */
Before({tags: '@integration'}, async function (scenario: ITestCaseHookParameter) {
  this.context = {
    ...this.context,
    scenario: {
      id: scenario.pickle.id,
      name: scenario.pickle.name,
    }
  }
})

After({tags: '@integration'}, async function () {
  // this.attach(safeStringify({ context: this.context.scenario }), 'application/json')
})

BeforeAll(async function () {
  return 'skipped'
})

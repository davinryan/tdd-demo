import {Given, Then, When} from '@cucumber/cucumber'
import {expect} from 'chai'

Given('user:{int} has navigated to todoList:{int}', async function (userId, todoListId) {
  // Action
  await this.openUrl('http://localhost:3000/');
});
When('user:{int} creates a todo:{int} with description {string}', async function (userId, todoId, todoDescription) {
  // Locate
  const todoDescriptionInput = this.page.locator('.addTodoForm .todoDescription');
  const todoAddButton = this.page.locator('.addTodoForm .todoAdd');

  // Action
  await todoDescriptionInput.type(todoDescription)
  await todoAddButton.click()
});

Then('todoList:{int} contains todo:{int} with description {string}', async function (todoListId, todoId, expectedTodoDescription) {
  // Locate
  await this.page.waitForSelector('.todoList .todo:nth-child(1)')
  const firstTodo = await this.page.locator('.todoList .todo:nth-child(1)')

  // Verify
  expect(await firstTodo.innerText()).to.include(expectedTodoDescription)
});

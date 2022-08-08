import {Given, Then, When} from '@cucumber/cucumber'

Given('user:{int} has an existing todoList:{int}', async function (userId: number, todoListId: number) {
  return 'pending';
});

When('user:{int} creates a todoItem:{int} with description {string}', async function (userId: number, todoListId: number, description: string) {
  return 'pending';
});

Then('todoList:{int} contains todoItem:{int}', async function (todoListId: number, todoItemId: number) {
  return 'pending';
});

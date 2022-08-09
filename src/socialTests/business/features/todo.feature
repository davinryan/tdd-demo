Business Need: Ensure users can organise themselves by adding items to their todo list

  Background: Conditions: expect items are created correctly

  @integration
  Scenario Outline: TODO04 - TODO should be created by AddTodoForm and displayed in TodoList containers
    Given user:1 has navigated to todoList:1
    When user:1 creates a todo:1 with description <description>
    Then todoList:1 contains todo:1 with description <description>
    Examples:
      | description                   |
      | "Pick up my son from daycare" |
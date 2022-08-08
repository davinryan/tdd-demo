Business Need: Ensure users can organise themselves by adding items to their todo list

  Background: Conditions: expect items are created correctly

  @integration
  Scenario Outline: TD01 Create basic item
    Given user:1 has an existing todoList:1
    When user:1 creates a todoItem:1 with description <description>
    Then todoList:1 contains todoItem:1
    Examples:
      | description                 |
      | "Pick up my son from daycare" |
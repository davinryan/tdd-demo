## Conversation after pulling story

1. (Dev) pulls new story to build Todo item in TodList
2. (Dev, Tester) pulls in tester and starts writing down test scenarios and chat back and forth

**Note**: Unit = unit test, Business = cucumber integration test 
   * (Unit) Scenario TODO01 - should display a description
   * (Unit) Scenario TODO02 - should support ability to delete via callback to container
   * (Unit) Scenario TODO03 - should throw exception if delete callback fails
   * (Business) Scenario TODO04 - TODO should be created by AddTodoForm and displayed in TodoList containers

4. (Tester) Ok I think we're done here, if you can start on the unit tests and implementation for 
scenarios 1, 2, 3 and I'll write a cucumber integration test for scenario 4. I think we've managed to come up with 
the best split to ensure our tests run fast, don't repeat each other, ensure we don't have to many long-running 
brittle integration tests and we both agree on what's required
import {render} from '@testing-library/react'
import {makeGetElementByClassName} from '../../testUtils/testUtils'

describe('Todo test suite', () => {

  const mockDeleteTodo = jest.fn()
  beforeEach(() => {
    mockDeleteTodo.mockReset()
  })

  // const todoBuilder = {
  //   build: () => <Todo index={0} task={{id: 1, description: 'description'}} onDelete={mockDeleteTodo}></Todo>
  // }

  it('Scenario TODO01 - should...', () => {
    // Setup
    // const {container} = render(todoBuilder.build())
    // const getElementByClassName = makeGetElementByClassName(container)
  })
})
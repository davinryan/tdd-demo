import {fireEvent, render} from '@testing-library/react'
import Todo from './Todo'
import {makeGetElementByClassName} from '../../testUtils/testUtils'

describe('Todo test suite', () => {

  const mockDeleteTodo = jest.fn()
  beforeEach(() => {
    mockDeleteTodo.mockReset()
  })

  const todoBuilder = {
    build: () => <Todo index={0} task={{id: 1, description: 'description'}} onDelete={mockDeleteTodo}></Todo>
  }

  it('Scenario TODO01 - should display a description', () => {
    // Setup
    const {container} = render(todoBuilder.build())
    const getElementByClassName = makeGetElementByClassName(container)

    // Test & Verify
    expect(getElementByClassName('todoDescription')).toHaveTextContent('description')
  })

  it('Scenario TODO02 - should support ability to delete via callback to container', () => {
    // Setup
    const {container} = render(todoBuilder.build())
    const getElementByClassName = makeGetElementByClassName(container)
    const todoElement = getElementByClassName('todoDeleteButton') as HTMLElement

    // Test
    fireEvent.click(todoElement)

    // Verify
    expect(mockDeleteTodo).toBeCalled()

  })
})
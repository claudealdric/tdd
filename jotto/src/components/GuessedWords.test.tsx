import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../tests/testUtils'
import GuessedWords from './GuessedWords'

const setup = (props = {}) => {
  return shallow(<GuessedWords {...props} />)
}

test('Renders without errors', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-guessed-words')
  expect(component.length).toBe(1)
})

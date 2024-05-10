import { render, screen } from 'expo-router/testing-library'
import React from 'react'

import { Text } from './Text'

describe('<Text />', () => {
  it('renders passed text', () => {
    render(<Text>Test</Text>)
    expect(screen.getByText('Test')).toBeDefined()
  })
})

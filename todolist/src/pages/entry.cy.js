import React from 'react'
import Entry from './entry'

describe('<Entry />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Entry />)
  })
})
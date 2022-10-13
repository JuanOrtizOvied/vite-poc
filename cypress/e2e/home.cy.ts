/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="cypress" />


describe('Home', () => {
  it('Find principal title', () => {
    cy.visit('/');

    cy.contains('Vite + React');
  });
});

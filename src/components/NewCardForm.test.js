import React from 'react';
import NewCardForm from './NewCardForm';
import { render, cleanup } from '@testing-library/react'

// ... Other tests and imports

test('It will render the proper data for a card', () => {
  // Arrange & Act
  const container = render(
  <NewCardForm 
    addCardCallback={() => { }}/> 
    );

  // Assert
  expect(container.getByPlaceholderText(/enter card text here/)).toBeDefined();

});
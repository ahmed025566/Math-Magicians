import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Quotes from './Quotes';

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve([{
//     author: 'John Irving',
//     category: 'courage',
//     quote: 'If you are lucky enough to find a way of life you love',
//   }]),
// }));
// await act(async () => render(<Quotes />));
describe('Quote', () => {
  it('should render the quote', async () => {
    await act(async () => render(<Quotes />))
    .then(() => {
        const quote = screen.getByText("Be Happy!");
        expect(quote).toBeInTheDocument();
    })
       
   
   
  });
});

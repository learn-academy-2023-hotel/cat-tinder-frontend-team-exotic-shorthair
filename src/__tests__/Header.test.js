import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from "../components/Header"


// Testing


describe("<Header />", () => {
  it('does not crash when rendering', () => {
    render(
      <BrowserRouter>
      <Header />
      </BrowserRouter>  
    )
      const homeElement = screen.getByText(/home/i)
      expect(homeElement).toBeInTheDocument()
  })
})

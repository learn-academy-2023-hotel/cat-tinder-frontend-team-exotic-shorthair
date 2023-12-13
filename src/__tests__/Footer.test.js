import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it('does not crash when rendering', () => {
    render(
      <BrowserRouter>
      <Footer />
      </BrowserRouter>  
    )
  })
  // const footer = screen.getByText(/joseph/i)
  // expect(footer).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"

describe("<Home />", () => {
  it('does not crash when rendering', () => {
    render(
      <BrowserRouter>
      <Home />
      </BrowserRouter>  
    )
  })
})




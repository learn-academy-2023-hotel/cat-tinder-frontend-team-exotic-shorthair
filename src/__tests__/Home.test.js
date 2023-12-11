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

  it('checks for the first img tag and all of its props', () => {
    render(

    )
  })
})




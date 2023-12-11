import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it('does not crash when rendering', () => {
    render(
      <BrowserRouter>
      <NotFound />
      </BrowserRouter>  
    )
  })
})

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from "../components/Header"

describe("<Header />", () => {
  it('does not crash when rendering', () => {
    render(
      <BrowserRouter>
      <Header />
      </BrowserRouter>  
    )
  })
})
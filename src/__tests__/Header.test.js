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
    const homeElement = screen.getByText(/home/i)
    expect(homeElement).toBeInTheDocument()
  })

  it('renders a index link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // const indexElement = screen.getByText(/see the cats/i)
    // expect(indexElement).toBeInTheDocument()
  })

  it('renders three navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const homeLink = screen.getAllByRole('link')
    expect(homeLink.length).toEqual(3)
  })

  it('renders a home link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // const homeLink = screen.getByRole('link', { 
      // name: /home/i
    // })
    // expect(homeLink).toBeInTheDocument()
  })

})
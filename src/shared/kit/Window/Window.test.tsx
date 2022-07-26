import { render, screen } from '@testing-library/react'
import { Window } from './Window'

const size = {
  width: 100,
  height: 100,
}

describe('Window component', () => {
  it('should render successfully', () => {
    render(<Window>Content</Window>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should render window title', () => {
    render(<Window title='Title'>Content</Window>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('should change default window size', () => {
    render(
      <Window title='Title' defaultSize={size}>
        Content
      </Window>,
    )

    expect(screen.getByTestId('wrapper')).toHaveStyle({
      width: '100px',
      height: '100px',
      position: 'absolute'
    })
  })
})

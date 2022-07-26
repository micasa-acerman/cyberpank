import { render, screen } from '@testing-library/react'
import ButtonComponent from './Button'

describe('Button component', () => {
  it('should render successfully', () => {
    render(<ButtonComponent variant='primary'>button</ButtonComponent>)
    expect(screen.getByText('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('Placeholder works correctly', () => { 
    render(<ButtonComponent variant='primary' placeholder='plc holder'></ButtonComponent>)
    expect(screen.getByPlaceholderText('plc holder')).toBeInTheDocument()
  })
  it('Button snapshot', () => {
    const button = render(<ButtonComponent variant='primary'>value</ButtonComponent>)
    expect(button).toMatchSnapshot()
  })
})

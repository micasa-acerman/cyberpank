import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextField } from './TextField'

const onChange = jest.fn()

describe('TextField component', () => {
  it('should render successfully', () => {
    render(<TextField value='input' onChange={onChange} />)
    expect(screen.getByDisplayValue('input')).toBeInTheDocument()
  })

  it('should works onChange', () => {
    render(<TextField value='input' onChange={onChange} />)
    userEvent.type(screen.getByDisplayValue('input'), 'TextField')
    expect(onChange).toHaveBeenCalledTimes('TextField'.length)
  })
})

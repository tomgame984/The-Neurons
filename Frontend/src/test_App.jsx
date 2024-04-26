import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders the App component', () => {
  render(<App />)
  
  // Assert that the Vite and React logos are rendered
  expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
  expect(screen.getByAltText('React logo')).toBeInTheDocument()

  // Assert that the count starts at 0
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument()

  // Simulate a click on the button and assert that the count increases
  fireEvent.click(screen.getByText(/count is 0/i))
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument()

  // Assert that the "Edit src/App.jsx and save to test HMR" text is rendered
  expect(screen.getByText(/Edit src\/App.jsx and save to test HMR/i)).toBeInTheDocument()

  // Assert that the "Click on the Vite and React logos to learn more" text is rendered
  expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument()
})
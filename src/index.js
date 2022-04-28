import TodoApp from './pages/TodoApp'
import React from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'

const root = createRoot(document.querySelector('#root'))
const Root = () => (
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)

root.render(<Root />)

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList'
import NotFound from './pages/NotFound'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={ <TodoList /> }
        />
        <Route
          path='*'
          element={ <NotFound /> }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

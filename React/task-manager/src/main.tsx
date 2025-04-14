import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import '@fontsource/lexend/300.css';

import App from './App.tsx';
import { TodoProvider } from './context/TodoContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)

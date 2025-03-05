import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';  // Importowanie QueryClient i QueryClientProvider

const queryClient = new QueryClient();  // Utworzenie nowej instancji QueryClient

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)

import { BrowserRouter, HashRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'

const AppRouter = import.meta.env.VITE_USE_HASH_ROUTE === 'true' ? HashRouter : BrowserRouter

export default function App() {
  return (
    <AppRouter>
      <AppRoutes/>
    </AppRouter>
  )
}
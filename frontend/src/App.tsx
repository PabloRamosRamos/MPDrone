import './App.css'
import { RouterProvider, useRouter } from './router/Router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Galeria from './pages/Galeria'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

const PAGES: Record<string, () => JSX.Element> = {
  '/': Home,
  '/servicios': Servicios,
  '/galeria': Galeria,
  '/nosotros': Nosotros,
  '/contacto': Contacto,
}

function Pages() {
  const { path } = useRouter()
  const Page = PAGES[path] ?? Home

  return (
    <Layout>
      <Page />
    </Layout>
  )
}

function App() {
  return (
    <RouterProvider>
      <Pages />
    </RouterProvider>
  )
}

export default App

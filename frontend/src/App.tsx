import './App.css'
import { RouterProvider, useRouter } from './router/Router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Tecnologia from './pages/Tecnologia'
import Casos from './pages/Casos'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

const PAGES: Record<string, () => JSX.Element> = {
  '/': Home,
  '/servicios': Servicios,
  '/tecnologia': Tecnologia,
  '/casos': Casos,
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

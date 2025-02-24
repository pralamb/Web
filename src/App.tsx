import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { muiTheme } from './config/theme'
import { ROUTES } from './config/constants'

// Layouts
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.BLOG} element={<Blog />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App

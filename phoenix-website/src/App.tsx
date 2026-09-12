import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DocsLayout from './pages/docs/DocsLayout'
import DocPage from './pages/docs/DocPage'

export default function App() {
  return (
    <BrowserRouter basename="/Phoenix">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocPage />} />
            <Route path=":slug" element={<DocPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

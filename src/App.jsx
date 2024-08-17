import { Routes, Route, Outlet } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import SiteHeader from './components/SiteHeader.jsx'

function Layout() {
    return (
        <>
            <SiteHeader />
            <main>
                <Outlet />
            </main>
            <SiteFooter />
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default App

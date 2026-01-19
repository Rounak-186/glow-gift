import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Test from './pages/Test'
import { WishlistPage } from './pages/Wishlist'
import { Cart } from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import OrderPage from './pages/Order'
import CouponsPage from './pages/Coupons'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/testing' element={<Test />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/orders' element={<OrderPage />} />
          <Route path='/coupons' element={<CouponsPage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

export default function BaseLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

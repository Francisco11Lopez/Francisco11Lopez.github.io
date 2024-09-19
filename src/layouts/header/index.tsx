import Navbar from '@components/Navbar'

export default function Header(): JSX.Element {
  return (
    <header
      className='sticky top-0 h-[4.5rem] flex items-center bg-transparent py-[1.5rem] z-50'
      style={{ borderBottom: '1px solid rgba(179, 179, 186, 0)' }}
    >
      <Navbar />
    </header>
  )
}

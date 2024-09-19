export default function Footer(): JSX.Element {
  return (
    <footer
      className='flex items-center justify-center bg-transparent py-[1.2rem] gap-[2rem]'
      style={{
        borderTop: '1px solid rgba(179, 179, 186, 0.2)',
        borderBottom: '1px solid rgba(179, 179, 186, 0.2)'
      }}
    >
      <p>© {new Date().getFullYear()} Francisco López</p>

      <a
        href='#start'
        target='_self'
        rel='noopener noreferrer'
        className='text-zinc-500'
      >
        ¡Ir hacia arriba!
      </a>
    </footer>
  )
}

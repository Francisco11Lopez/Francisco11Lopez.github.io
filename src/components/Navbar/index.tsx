import GithubIcon from '@icons/github.icon'
import ReactIcon from '@icons/react/react.icon'

export default function Navbar(): JSX.Element {
  return (
    <nav
      className='h-[4.5rem] w-full flex items-center justify-between bg-[rgba(255, 255, 255, 0.01)]'
      style={{ backdropFilter: 'blur(6px)' }}
    >
      <a
        href='/'
        target='_self'
        rel='noopener noreferrer'
        draggable={false}
        className='ml-[4rem] rounded-[50%]'
      >
        <ReactIcon />
      </a>

      <ul className='flex items-center justify-center gap-[4rem] font-light mr-[15rem]'>
        <li>
          <a
            href='#start'
            target='_self'
            rel='noopener noreferrer'
            draggable={false}
            className='hover:opacity-60'
            style={{ transition: 'opacity 850ms ease-in-out 0s' }}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href='#aboutme'
            target='_self'
            rel='noopener noreferrer'
            draggable={false}
            className='hover:opacity-60'
            style={{ transition: 'opacity 850ms ease-in-out 0s' }}
          >
            Sobre mi
          </a>
        </li>
        <li>
          <a
            href='#skills'
            target='_self'
            rel='noopener noreferrer'
            draggable={false}
            className='hover:opacity-60'
            style={{ transition: 'opacity 850ms ease-in-out 0s' }}
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Francisco11Lopez'
            target='_blank'
            rel='noopener noreferrer'
            draggable={false}
            className='hover:opacity-60'
            style={{ transition: 'opacity 850ms ease-in-out 0s' }}
          >
            <GithubIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}

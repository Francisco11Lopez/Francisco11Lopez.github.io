import LeftArrowIcon from '@icons/leftArrow.icon'

export default function NotFoundPage(): JSX.Element {
  return (
    <main className='h-screen w-full flex flex-col items-center justify-center gap-[0.7rem]'>
      <h1 className='text-[1.5rem] text-red-700'>
        Oops! Page Not Found - Error 404
      </h1>

      <a
        href='/'
        target='_self'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-[1rem] text-zinc-600'
      >
        <span
          className='flex items-center justify-center p-[0.3rem] rounded-[50%]'
          style={{ outline: '1px solid gray' }}
        >
          <LeftArrowIcon />
        </span>
        <span>Go to back</span>
      </a>
    </main>
  )
}

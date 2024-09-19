import './styles.css'

// Components
import Section from '@components/Section'
import Title from '@components/Title'
import Card from '@components/Card'

// Icons
import VenezuelaIcon from '@icons/flags/venezuela.icon'
import UsaIcon from '@icons/flags/usa.icon'
import SpainIcon from '@icons/flags/spain.icon'
import FeAlegriaIcon from '@icons/feAlegria.icon'
import LeftArrowIcon from '@icons/leftArrow.icon'
import PhoneIcon from '@icons/phone.icon'
import MailIcon from '@icons/mail.icon'
import HtmlIcon from '@icons/html.icon'
import CssIcon from '@icons/css.icon'
import JavaScriptIcon from '@icons/javascript.icon'
import ReactIcon from '@icons/react/react.icon'
import PhpIcon from '@icons/php.icon'
import NodeJsIcon from '@icons/nodejs.icon'

export default function IndexPage(): JSX.Element {
  return (
    <>
      {/** Inicio */}
      <Section
        type='main'
        className={
          'sm:h-[120vh] gap-[1.2rem] flex items-center ' +
          'justify-center sm:mt-[2rem] md:mt-[-5rem] ' +
          'lg:mt-[2rem]'
        }
      >
        <div
          className={
            'lg:flex lg:flex-row md:flex md:flex-row ' +
            'sm:flex sm:flex-col sm:gap-12 ' +
            'items-center justify-center gap-16 sm:px-0'
          }
        >
          <div
            className={
              'sm:w-full sm:mt-[2rem] flex flex-col items-start ' +
              'justify-center gap-[1rem] font-bold'
            }
          >
            <h1 className='text-[4rem] leading-[1.2]'>Hey, I'm Francisco!</h1>

            <small className='w-max text-[1.5rem] font-light text-[#7c7c7d]'>
              BackEnd | FrontEnd | Future Network Technician
            </small>

            <em
              className={
                'flex items-center justify-center ' +
                'text-[1rem] text-zinc-500 gap-3 select-none'
              }
            >
              Scroll Down
              <div
                className='rotate-[270deg] p-[0.2rem] rounded-[50%]'
                style={{
                  border: '1px solid var(--light)',
                  animation: 'scroll-down 2s infinite ease-in-out 0s'
                }}
              >
                <LeftArrowIcon height='15px' width='15px' />
              </div>
            </em>
          </div>
          <img
            src='/images/my_picture_tr.png'
            alt='My Picture'
            draggable='false'
            style={{ transition: 'filter 800ms ease-in-out 0s' }}
            className='md:h-[28rem] md:w-[25rem] sm:h-[22rem] my-pic'
          />
        </div>
      </Section>

      {/** Sobre Mi */}
      <Section
        id='aboutme'
        className={
          'bg-[#09090b] h-[138vh] lg:text-[1.4rem] ' +
          'md:text-[1.2rem] sm:text-[1rem] gap-4 flex ' +
          'flex-col items-start justify-start sm:h-[225vh] ' +
          'md:h-[135vh]'
        }
      >
        <h2 className='text-[4rem]'>Sobre Mi</h2>

        {/* Col - 1 */}
        <div
          className={
            'mt-10 w-full px-28 sm:flex-col lg:flex lg:flex-row md:flex md:flex-row items-center justify-center gap-20'
          }
        >
          {/* Datos Iniciales */}
          <Card paddingY={2} gap={1} justifyType='center'>
            <h3 className='text-[2.2rem]'>Datos Iniciales</h3>

            <div className='flex flex-col items-start justify-center gap-1'>
              <div className='flex items-center justify-center gap-2'>
                <strong className='text-zinc-500'>Nombre y Apellido:</strong>
                <p>Francisco López</p>
              </div>

              <div className='flex items-center justify-center gap-2'>
                <strong className='text-zinc-500'>Fecha de nacimiento:</strong>
                <p>11-11-2003</p>
              </div>

              <div className='flex items-center justify-center gap-2'>
                <strong className='text-zinc-500'>País:</strong>
                <div className='flex items-center gap-2'>
                  <VenezuelaIcon />
                  <p>Venezuela</p>
                </div>
              </div>

              <div className='flex items-center justify-center gap-2'>
                <strong className='text-zinc-500'>Estado:</strong>
                <p>Lara</p>
              </div>
            </div>
          </Card>

          {/* Formación */}
          <Card paddingY={2} gap={4}>
            <h3 className='text-[2.2rem]'>Formación</h3>

            <div className='flex flex-col items-start justify-center gap-0'>
              <strong className='text-zinc-500'>Primaria:</strong>
              <p>U.E Colegio Pastor Cortes Vázquez</p>
              <p className='text-zinc-600'>2006 - 2012</p>
            </div>

            <div className='flex flex-col items-start justify-center gap-0'>
              <strong className='text-zinc-500'>Secundaria:</strong>
              <p>U.E Colegio Prado del Norte</p>
              <p className='text-zinc-600'>2014 - 2020</p>
            </div>

            <div className='flex flex-col items-start justify-center gap-0'>
              <strong className='text-zinc-500'>T.S.U en Informática:</strong>
              <div className='flex items-center gap-2'>
                <FeAlegriaIcon />
                <p>Instituto Universitario Jesús Obrero</p>
              </div>
              <p className='text-zinc-600'>2021 - Presente</p>
            </div>
          </Card>
        </div>

        {/* Col - 2 */}
        <div
          className={
            'lg:mt-10 md:mt-10 sm:mt-2 w-full px-28 sm:flex-col lg:flex lg:flex-row ' +
            'md:flex md:flex-row items-center justify-center ' +
            'gap-20'
          }
        >
          {/* Idiomas */}
          <Card gap={2} justifyType='center'>
            <h3 className='text-[2.2rem]'>Idiomas</h3>

            <div className='flex items-center justify-center gap-3'>
              <SpainIcon />
              <strong className='text-zinc-500'>Español:</strong>
              <p>Nativo</p>
            </div>

            <div className='flex items-center justify-center gap-3'>
              <UsaIcon />
              <strong className='text-zinc-500'>Inglés:</strong>
              <p>Nivel B1</p>
            </div>
          </Card>

          {/* Contacto*/}
          <Card gap={2} justifyType='center'>
            <h3 className='text-[2.2rem]'>Contacto</h3>

            <div className='flex items-center justify-center gap-2'>
              <PhoneIcon stroke='#71717a' />

              <a
                href='https://api.whatsapp.com/send?phone=584165402718'
                rel='noopener noreferrer'
                target='_blank'
                className='hover:opacity-45'
                style={{ transition: 'opacity 820ms ease-in-out 0s' }}
              >
                +58 4165402718
              </a>
            </div>

            <div className='flex items-center justify-center gap-3'>
              <MailIcon fill='#71717a' />
              <a
                href='mailto:franciscomiguel1103@gmail.com'
                rel='noopener noreferrer'
                target='_blank'
                className='hover:opacity-45'
                style={{ transition: 'opacity 820ms ease-in-out 0s' }}
              >
                franciscomiguel1103@gmail.com
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* Habilidades */}
      <Section
        id='skills'
        className={
          'bg-[#121015] text-[1.3rem] flex flex-col ' +
          'items-start justify-start py-[6rem] gap-4'
        }
      >
        <h2 className='text-[4rem]'>Habilidades</h2>

        <div
          className={
            'mt-16 w-full px-40 flex items-center ' +
            'justify-center sm:flex sm:flex-row md:flex ' +
            'md:flex-row lg:flex lg:flex-row ' +
            'lg:gap-28 md:gap-28 sm:gap-20'
          }
        >
          <div className='gap-8 flex flex-col items-center justify-center'>
            <Title title='FrontEnd' textSize='1.5' />

            <div
              className={
                'flex items-center justify-center ' +
                'lg:flex lg:flex-row md:flex md:flex-row ' +
                'sm:flex sm:flex-row lg:gap-8 md:gap-8 sm:gap-4'
              }
            >
              <HtmlIcon height='100px' width='100px' fill='#c94727' />
              <CssIcon height='100px' width='100px' fill='#1a1e8b' />
              <span className='mt-4'>
                <JavaScriptIcon height='80px' width='80px' fill='#c0c826' />
              </span>
              <span className='mt-4'>
                <ReactIcon height='80px' width='80px' isAnimation={false} />
              </span>
            </div>
          </div>

          <div className='gap-8 flex flex-col items-center justify-center'>
            <Title title='BackEnd' textSize='1.5' />

            <div
              className={
                'flex items-center justify-center ' +
                'lg:flex lg:flex-row md:flex md:flex-row ' +
                'sm:flex sm:flex-row lg:gap-8 md:gap-8 sm:gap-4 '
              }
            >
              <PhpIcon height='100px' width='100px' />
              <NodeJsIcon height='100px' width='100px' />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

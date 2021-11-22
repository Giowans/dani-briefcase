import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import Fade from "react-reveal/Fade";

const Footer = ({extended = false, className, animationConfig}) => {
    return (
      <Fade {...animationConfig}>
        { extended && (
          <div className = {'col-span-12 grid-cols-12 grid '+className}>
            <h1 className = 'w-full col-span-12 my-10 text-4xl font-bold'>¿Quieres platicar de algún proyecto?</h1>
            <div className = 'flex flex-col items-center justify-start col-span-3'>
              <p className="w-full mt-4 text-sm text-red-600">
                Email
              </p>
              <a href='mailto:daniaranda26@gmail.com' className="w-full mt-2 text-sm text-gray-600">
                daniaranda26@gmail.com
              </a>
              <p className="w-full mt-4 text-sm text-red-600">
                Número telefónico
              </p>
              <a href='https://wa.me/523326550350' className="w-full mt-2 text-sm text-gray-600">
                +52 33 2655 0350
              </a>
            </div>
            <div className = 'flex flex-col items-center justify-start col-span-2'>
              <p className="w-full mt-4 text-sm text-red-600">
                Continuar mirando
              </p>
              <Link href = '/aboutMe' as = '/sobre-mi'>
                <a className = {'w-full mt-1 text-sm text-gray-600 hover:text-black'}>Sobre mi</a>
              </Link>
              <Link href = '/briefcase' as = '/portafolio'>
                <a className = {'w-full mt-1 text-sm text-gray-600 hover:text-black'}>Portafolio</a>
              </Link>
              <Link href = '/thinkers' as = '/pensadores'>
                <a className = {'w-full mt-1 text-sm text-gray-600 hover:text-black'}>Pensadores</a>
              </Link>
              <Link href = '/downloadable' as = '/descargable'>
                <a className = {'w-full mt-1 text-sm text-gray-600 hover:text-black'}>Descargable</a>
              </Link>
              <Link href = '/contactMe' as = '/contacto'>
                <a className = {'w-full mt-1 text-sm text-gray-600 hover:text-black'}>Contacto</a>
              </Link>
              <Link href = '/questionarie' as = '/cuestionario'>
                <a className = {'w-full mt-1 text-sm text-gray-600 hover:text-black'}>Cuestionario</a>
              </Link>
            </div>
            <div className = 'flex flex-col items-center justify-start col-span-5 px-8'>
              <h3 className = 'w-full mt-4 text-3xl font-bold text-red-600 text-start'>Cuestionario de proyecto</h3>
              <p className="w-full mt-4 text-sm text-gray-600">
                ¿Quisieras contestar un pequeño cuestionario?
                Me ayudara a entender mejor tu proyecto y podremos
                entablar una mayor comunicación.
              </p>
              <Link href="/questionarie" as="/questionario">
                <a className="w-full col-span-12 my-4 text-red-600 hover:text-red-800">
                  Ir a cuestionario
                </a>
              </Link>
            </div>  
          </div>
        )}
        <div className = 'col-span-12 mt-28'>
          <div className = 'flex items-center justify-center w-screen p-4 -mx-32 bg-red-600'>
            <div className = 'flex flex-row justify-between w-40'>
              <a href = 'https://www.facebook.com/daniel.aranda.543'>
                <FaFacebookF size = '1.25rem' color = 'white'/>
              </a>
              <a href = 'https://www.instagram.com/daniaranda/'>
                <BsInstagram size = '1.25rem' color = 'white'/>
              </a>
              <a href = 'https://wa.me/523326550350'>
                <BsWhatsapp size = '1.25rem' color = 'white'/>
              </a>
            </div>
          </div>
          <div className = 'flex items-center justify-center w-screen p-4 -mx-32 bg-black'>
            <p className = 'text-sm text-center text-white'>
              2021 © Todos los derechos reservados: Daniel Aranda
            </p>
          </div>
        </div>
      </Fade>
    )
}

export default Footer;
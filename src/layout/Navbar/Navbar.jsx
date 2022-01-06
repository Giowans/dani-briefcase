import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaFacebookF } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
//Animations
import { Flip, Fade } from 'react-reveal';

const Navbar = ({ showNavbar, ...props}) => {

  const router = useRouter();
  const [routeActive, setRouteActive] = useState('/aboutMe');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [delayedHidden, setDelayedHidden] = useState('hidden');

  useEffect(() => {
    setRouteActive(router.pathname);
    console.log(router);
  }, [router.pathname])

  const handleRouteActive = (paramRoute) => {
    var linkClass = 'px-3 text-black hover:text-red-600 lg:text-gray-500 transition text-3x1 lg:hover:text-black'
    if(paramRoute === routeActive)
    {
      return linkClass + ' font-bold text-red-600 lg:text-black';
    }
    return linkClass;
  }

  const handleMenuOpen = (setOpen) => {
    if(setOpen)
    {
      setMenuIsOpen(true);
      setDelayedHidden('');
    }
    else
    {
      setMenuIsOpen(false);
      setTimeout(() => {
        setDelayedHidden('hidden');
      }, 500)
    }
  }
  
  return (
    <>
    <div className='fixed z-50 w-full lg:hidden'>
      <div className='flex flex-row items-center justify-between w-full px-8 py-3 md:w-screen backdrop-blur bg-white/60'>
        <div>
          <Link href = "/" passHref>
            <Image className = 'cursor-pointer' width={190} height = {30} src = "/images/dani_logo.png"/>
          </Link>
        </div>
        {!menuIsOpen 
        ? 
          <MdMenu
            onClick={ () => handleMenuOpen(true)}
            size={'2rem'}
            className='text-black transition duration-300 cursor-pointer hover:text-red-500' 
          />
        :
          <MdClose
            onClick={() => handleMenuOpen(false)}
            size={'2rem'}
            className='text-red-500 transition duration-300 cursor-pointer hover:text-red-700' 
          />
        }
      </div>
      <Fade right when = {menuIsOpen}>
        <div className={`flex flex-col float-right w-1/2 h-screen py-5 -mt-0.5 backdrop-blur bg-white/60 ${delayedHidden}`}>
          <div className='flex flex-col items-center justify-around w-full px-8 h-4/6'>
            <Link href = '/aboutMe' as = '/sobre-mi'>
              <a className = {handleRouteActive('/aboutMe')}>Sobre mi</a>
            </Link>
            <Link href = '/briefcase' as = '/portafolio'>
              <a className = {handleRouteActive('/briefcase')}>Portafolio</a>
            </Link>
            <Link href = '/thinkers' as = '/pensadores'>
              <a className = {handleRouteActive('/thinkers')}>Pensadores</a>
            </Link>
            <a href = '/documents/DA-DLC.pdf' download = 'Portafolio Offline Daniel Aranda' className = {handleRouteActive('/downloadable')}>Descargable</a>
            <Link href = '/contactMe' as = '/contacto'>
              <a className = {handleRouteActive('/contactMe')}>Contacto</a>
            </Link>
            <Link href = '/questionarie' as = '/cuestionario'>
              <a className = {handleRouteActive('/questionarie')}>Cuestionario</a>
            </Link>
          </div>
          <Flip left cascade>
            <div className = 'flex flex-row items-center self-center justify-between px-3 mt-12 w-36 justify-self-center'>
              <a href = 'https://www.facebook.com/daniel.aranda.543'>
                <FaFacebookF size = '1.25rem' className = 'text-gray-600'/>
              </a>
              <a href = 'https://www.instagram.com/daniaranda/'>
                <BsInstagram size = '1.25rem' className = 'text-gray-600'/>
              </a>
              <a href = 'https://wa.me/523326550350'>
                <BsWhatsapp size = '1.25rem' className = 'text-gray-600'/>
              </a>
            </div>
          </Flip>
        </div>
      </Fade>
    </div>
    <div className='hidden lg:block'>
      <Fade top when = {showNavbar}>
        <div className = 'fixed z-50 flex flex-row items-center justify-between w-screen px-12 py-3 bg-white'>
          <div>
            <Link href = "/" passHref>
              <Image className = 'cursor-pointer' width={190} height = {30} src = "/images/dani_logo.png"/>
            </Link>
          </div>
          <div className = 'flex flex-row justify-center'>
            <Link href = '/aboutMe' as = '/sobre-mi'>
              <a className = {handleRouteActive('/aboutMe')}>Sobre mi</a>
            </Link>
            <Link href = '/briefcase' as = '/portafolio'>
              <a className = {handleRouteActive('/briefcase')}>Portafolio</a>
            </Link>
            <Link href = '/thinkers' as = '/pensadores'>
              <a className = {handleRouteActive('/thinkers')}>Pensadores</a>
            </Link>
            <a href = '/documents/DA-DLC.pdf' download = 'Portafolio Offline Daniel Aranda' className = {handleRouteActive('/downloadable')}>Descargable</a>
            <Link href = '/contactMe' as = '/contacto'>
              <a className = {handleRouteActive('/contactMe')}>Contacto</a>
            </Link>
            <Link href = '/questionarie' as = '/cuestionario'>
              <a className = {handleRouteActive('/questionarie')}>Cuestionario</a>
            </Link>
            <div className = 'flex flex-row justify-between px-3 w-28'>
              <a href = 'https://www.facebook.com/daniel.aranda.543'>
                <FaFacebookF size = '1.25rem' className = 'text-gray-600'/>
              </a>
              <a href = 'https://www.instagram.com/daniaranda/'>
                <BsInstagram size = '1.25rem' className = 'text-gray-600'/>
              </a>
              <a href = 'https://wa.me/523326550350'>
                <BsWhatsapp size = '1.25rem' className = 'text-gray-600'/>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
    </>
  )
}

export default Navbar;
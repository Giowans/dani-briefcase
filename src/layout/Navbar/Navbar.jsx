import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Navbar = ({ showNavbar, ...props}) => {

  const router = useRouter();
  const [routeActive, setRouteActive] = useState('/aboutMe');

  useEffect(() => {
    setRouteActive(router.pathname);
    console.log(router);
  }, [router.pathname])

  const handleRouteActive = (paramRoute) => {
    var linkClass = 'px-3 text-gray-500 transition text-3x1 hover:text-black'
    if(paramRoute === routeActive)
    {
      return linkClass + ' text-black';
    }
    return linkClass;
  } 
  return (
    <div className = 'fixed z-50 flex flex-row items-center justify-between w-screen px-24 py-3 bg-white'>
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
  )
}

export default Navbar;
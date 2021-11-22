import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    <div className = 'fixed z-50 flex flex-row items-center justify-between w-screen px-32 py-5 bg-white'>
      <div>
        <Link href = "/" passHref>
          <Image className = 'cursor-pointer' width={262} height = {39} src = "/images/dani_logo.png"/>
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
        <Link href = '/downloadable' as = '/descargable'>
          <a className = {handleRouteActive('/downloadable')}>Descargable</a>
        </Link>
        <Link href = '/contactMe' as = '/contacto'>
          <a className = {handleRouteActive('/contactMe')}>Contacto</a>
        </Link>
        <Link href = '/questionarie' as = '/cuestionario'>
          <a className = {handleRouteActive('/questionarie')}>Cuestionario</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Link from 'next/link';

const BriefcaseItem = ({briefcaseData, className, key, minimalist = false, onSelect}) => {

    const [showTitle, setShowTitle] = useState(false);

    const { path, title, detail, type, year } = briefcaseData;

    useEffect(
      () => {
        if(!showTitle && minimalist)
        {
          let timer2 = setTimeout(() => setShowTitle(true), Math.floor(Math.random() * (1000 - 7000 + 1) + 1000));
    
          return () => {
            clearTimeout(timer2);
          };
        }
      },
      []
    );

    if(minimalist)
    {
      return (
        <Bounce where = {showTitle}>
          <div className = {className} key = {key} onClick = {() => onSelect && onSelect()}>
            <div className = 'flex flex-col items-center justify-center w-full duration-200 ease-out cursor-pointer h-fit hover:opacity-80'>
              <Image
                width = {1300}
                height = {1000}
                src = {path}
                alt = {title}
              />
              <Link href = '/talent' as = '/mi-talento'>
                <a className = 'text-2xl font-bold text-black transition duration-200 ease-out text-start hover:text-red-600 hover:text-3xl'>{title}</a>
              </Link>
            </div>
          </div>
        </Bounce>
      )
    }

    return (
      <Flip left>
        <div className = {className} key = {key} onClick = {() => onSelect && onSelect()}>
          <div className = 'relative flex items-center justify-center w-full h-full cursor-pointer' onMouseEnter = {() => setShowTitle(true)} onMouseLeave = {() => setShowTitle(false)}>
            <Image
              layout = 'fill'
              width = {1300}
              height = {1000}
              src = {path}
              alt = {title + '-' + path}
            />
            <div className = {'flex flex-col justify-start items-start w-full h-full absolute w-full h-full p-2 lg:p-8 bg-red-600 transition duration-200 ' + (showTitle ? ' opacity-80' : ' opacity-0')}>
              <h2 className = 'self-start w-full text-base text-white text-start lg:text-2xl'>{title}</h2>
              {detail && <h2 className = 'self-start w-full mt-2 text-base text-white text-start'>{detail}</h2>}
              {year && <p className = 'mt-2 text-sm text-white lg:text-base'>{year}</p>}
              {type && <p className = 'text-sm text-white lg:text-base'>{type}</p>}
            </div>
          </div>
        </div>
      </Flip>
    )
}

export default BriefcaseItem;
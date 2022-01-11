import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
import Image from 'next/image';

const InspirerItem = ({className, item}) => {
  const { title, detail, path} = item;
  const [showTitle, setShowTitle] = useState(false);

  return (
    <Flip left>
      <div className = {className} key = {title+path}>
        <div className = 'relative justify-center hidden w-full h-full cursor-pointer lg:flex ' onMouseEnter = {() => setShowTitle(true)} onMouseLeave = {() => setShowTitle(false)}>
          <Image
            layout = 'fill'
            width = {1300}
            height = {1000}
            src = {path}
            alt = {title + '-' + path}
          />
          <Fade bottom when = {showTitle}>
            <div className = {'flex flex-col justify-between lg:justify-start justify-self-end items-start w-full self-end h-full lg:h-3/6 absolute w-full p-3 lg:p-8 bg-red-600 transition duration-200 opacity-80 '}>
              <h2 className = {'self-start w-full text-white text-start '+ (detail ? 'text-sm lg:text-base' : 'text-xl lg:text-2xl')}>{title}</h2>
              {detail && <p className = 'self-start w-full text-xs text-white text-ellipsis lg:text-sm text-start'>{detail}</p>}
            </div>
          </Fade>
        </div>
        <div className = 'relative flex justify-center w-full h-full cursor-pointer lg:hidden 'onClick={() => setShowTitle(!showTitle)}>
          <Image
            layout = 'fill'
            width = {1300}
            height = {1000}
            src = {path}
            alt = {title + '-' + path}
          />
          <Fade bottom when = {showTitle}>
            <div className = {'flex flex-col justify-between lg:justify-start justify-self-end items-start w-full self-end h-full lg:h-2/6 absolute w-full p-3 lg:p-8 bg-red-600 transition duration-200 opacity-80 '}>
              <h2 className = {'self-start w-full text-white text-start '+ (detail ? 'text-sm lg:text-base' : 'text-xl lg:text-2xl')}>{title}</h2>
              {detail && <p className = 'self-start w-full text-white text-xxs text-ellipsis lg:text-xs text-start'>{detail}</p>}
            </div>
          </Fade>
        </div>
      </div>
    </Flip>
  )
}

export default InspirerItem;
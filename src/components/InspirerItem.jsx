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
        <div className = 'relative flex justify-center w-full h-full cursor-pointer ' onMouseEnter = {() => setShowTitle(true)} onMouseLeave = {() => setShowTitle(false)}>
          <Image
            layout = 'fill'
            width = {1300}
            height = {1000}
            src = {path}
            alt = {title + '-' + path}
          />
          <Fade bottom when = {showTitle}>
            <div className = {'flex flex-col justify-start justify-self-end items-start w-full self-end h-5/12 absolute w-full p-8 bg-red-600 transition duration-200 opacity-80 '}>
              <h2 className = {'self-start w-full text-white text-start '+ (detail ? 'text-base' : 'text-2xl')}>{title}</h2>
              {detail && <p className = 'self-start w-full text-sm text-white text-start'>{detail}</p>}
            </div>
          </Fade>
        </div>
      </div>
    </Flip>
  )
}

export default InspirerItem;
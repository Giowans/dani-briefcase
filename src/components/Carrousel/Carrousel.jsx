import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import Image from 'next/image';

const Carrousel = ({className, itemsToShow = 1, onClickImage, autoPlay, items, imageStyles}) => {

  // State
  const [auto, setAuto] = useState(autoPlay);
  const [carrouselItems, setCarrouselItems] = useState([]);
  
  const moveItems = (direction) => {
    const temp = [...carrouselItems];

    if (direction === 'right') {
      temp.push(temp.shift());
    } else {
      temp.unshift(temp.pop());
    }

    setCarrouselItems([...temp]);
  }

  useEffect(()=> {
    setCarrouselItems([...items])
  }, [items])


  return (
    <div className = {'w-screen inline-grid gap-x-2 grid-cols-12 max-h-96 -mx-12 lg:-mx-32 md:px-4 '+className}>
      <div className = 'flex items-center justify-center h-64 col-span-2 md:h-full md:col-span-1' >
        <AiOutlineLeft onClick = {() => moveItems('left')} size = {'3.2rem'} className = 'pl-4 text-gray-600 duration-200 ease-out cursor-pointer transition-color hover:text-red-600' />
      </div>
      <div className = 'grid grid-cols-12 col-span-8 gap-4 overflow-hidden md:col-span-10'>
        {carrouselItems.map((item, index) => {
          return (
            <Fade key = {item.path + index} >
              <div className = {`h-full col-span-${12/itemsToShow} flex justify-center items-center ${item.className}`}>
                <div className = 'flex flex-col items-center w-full h-full'>
                  <div className = {'relative w-full h-60 md:h-72 duration-200 ease-out cursor-pointer hover:opacity-80 '+imageStyles+' '+item.color} onClick = {() => onClickImage && onClickImage()}>
                    <Image
                      className = 'absolute z-30'
                      layout = 'fill'
                      src = {item.path}
                      alt = {item.title}
                    />
                  </div>
                  { item.title && (
                    <Link href = {`/inspirers/${item.id}`}>
                      <a className = 'self-start py-2 text-xl font-bold text-black duration-200 ease-out cursor-pointer text-start hover:text-red-600'>{item.title}</a>
                    </Link>
                  )}
                </div>
              </div>
            </Fade>
          )
        })}
      </div>
      <div className = 'flex items-center justify-center h-64 col-span-2 md:col-span-1 md:h-full' >
        <AiOutlineRight onClick = {() => moveItems('right')} size = {'3.2rem'} className = 'pr-4 text-gray-600 transition duration-200 ease-out cursor-pointer hover:text-red-600' />
      </div>
    </div>
  )
}

export default Carrousel;
import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    id: 1,
    color: 'bg-red-600',
    title: 'Paula Scher',
    className: '',
    path: '/images/inspirers/i1.png'
  },
  {
    id: 2,
    color: 'bg-black',
    title: 'David Carson',
    className: '',
    path: '/images/inspirers/i2.png'
  },
  {
    id: 3,
    color: 'bg-green-400',
    title: 'José Isaac Cortés López',
    className: '',
    path: '/images/inspirers/i3.png'
  },
  {
    id: 4,
    color: 'bg-yellow-400',
    title: 'Christop Niemann',
    className: '',
    path: '/images/inspirers/i4.png'
  },
  {
    id: 5,
    color: 'bg-blue-500',
    title: 'Cassisi',
    className: '',
    path: '/images/inspirers/i5.png'
  },
  {
    id: 6,
    color: 'bg-purple-400',
    title: 'Steve Simpson',
    className: '',
    path: '/images/inspirers/i6.png'
  },
]

const Carrousel = ({className, itemsToShow = 1, onClickImage, autoPlay}) => {

  // State
  const [carIndex, setCarIndex] = useState(0);
  const [auto, setAuto] = useState(autoPlay);
  const [carrouselItems, setCarrouselItems] = useState([...items]);
  const [direction, setDirection] = useState('');

  const updateItems = () => {
    console.log(direction, carIndex, (carIndex+(itemsToShow-1)));

    let aux = carrouselItems;
    if(direction === 'right')
    {
      aux.push(aux.shift());
    }
    if(direction === 'left')
    {
      aux.unshift(aux.pop())
    }
    setCarrouselItems(aux);
    console.log('aux: ', aux, 'carrousel: ', carrouselItems);
  }

  useEffect(() => {
    updateItems();
  }, [carIndex])


  return (
    <div className = {'w-screen inline-grid gap-x-2 grid-cols-12 max-h-96 -mx-32 px-4 '+className}>
      <div className = 'flex items-center justify-center' onClick = {() => {
        setDirection('left')
        let newIndex = carIndex;
        setCarIndex(newIndex+1)
        console.log(carIndex)
      }}>
        <AiOutlineLeft size = {'3.2rem'} className = 'pl-4 text-gray-600 duration-200 ease-out cursor-pointer transition-color hover:text-red-600' />
      </div>
      <div className = 'grid grid-cols-12 col-span-10 gap-4 overflow-hidden max-h-80'>
        {carrouselItems.map((item, index) => {
          return (
            <Fade>
              <div className = {`h-96 col-span-${12/itemsToShow} flex justify-center items-center ${item.className}`}>
                <div className = 'flex flex-col items-center w-full h-full'>
                  <div className = {'relative w-full h-72 duration-200 ease-out cursor-pointer hover:opacity-80 '+item.color} onClick = {() => onClickImage && onClickImage()}>
                    <Image
                      className = 'absolute z-30'
                      layout = 'fill'
                      width = {1300}
                      height = {1000}
                      src = {item.path}
                      alt = {item.title}
                    />
                  </div>
                  <Link href = {`/inspirers/${item.id}`}>
                    <a className = 'self-start py-2 text-xl font-bold text-black duration-200 ease-out cursor-pointer text-start hover:text-red-600'>{item.title}</a>
                  </Link>
                </div>
              </div>
            </Fade>
          )
        })}
      </div>
      <div className = 'flex items-center justify-center' onClick = {() => {
        setDirection('right')
        let newIndex = carIndex;
        setCarIndex(newIndex-1)
        console.log(carIndex)
      }}>
        <AiOutlineRight size = {'3.2rem'} className = 'pr-4 text-gray-600 transition duration-200 ease-out cursor-pointer hover:text-red-600' />
      </div>
    </div>
  )
}

export default Carrousel;
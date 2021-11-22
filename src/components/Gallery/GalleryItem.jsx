import { useEffect, useState } from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

const GalleryItem = ({id, className, interval, images}) => {
  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(
    () => {
      if(show && !showTitle)
      {
        let timer2 = setTimeout(() => {
          setShow(false)
          if(imageIndex == images.length-1)
          {
            setImageIndex(0);
          }
          else {
            var plus = imageIndex+1;
            setImageIndex(plus);
          }
        }, interval);
  
        return () => {
          clearTimeout(timer2);
        };
      }
    },
    [show, showTitle]
  );

  useEffect(() => {
    if(!show && !showTitle)
    {
      let timer = setTimeout(() => {
        setShow(true);
      }, 500);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [show])
  
    return (
      <Fade bottom when = {show} key = {id}>
        <div className = {className}>
          <div className = 'relative flex items-center justify-center w-full h-full cursor-pointer' onMouseEnter = {() => setShowTitle(true)} onMouseLeave = {() => setShowTitle(false)}>
            <Image
              fill = "true"
              width = {1300}
              height = {1000}
              src = {images[imageIndex].path}
              alt = {images[imageIndex].title}
            />
            <div className = {'flex justify-center items-center w-full h-full absolute w-full h-full p-8 bg-red-600 transition duration-200' + (showTitle ? ' opacity-80' : ' opacity-0')}>
              <h2 className = 'self-center w-full text-center text-white'>{[images[imageIndex].title]}</h2>
            </div>
          </div>
        </div>
      </Fade>
    )
}

export default GalleryItem;
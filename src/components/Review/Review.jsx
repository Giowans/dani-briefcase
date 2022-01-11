import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import YoutubeEmbed from '../YoutubeEmbed';
import Image from 'next/image';
import Link from 'next/link';
import Divider from '../Divider/Divider';

const getMediaByType = (mediaType, path, className = '')   => {
  if(mediaType === 'youtube')
  {
    return <YoutubeEmbed embedId = {path} className = {className}/>
  }
  if(mediaType === 'video')
  {
    return <YoutubeEmbed source = {path} className = {className}/>
  }
  if(mediaType === 'image')
  {
    return (
      <div className = {'w-full h-56 ' + className}>
        <Image width = {1800} height = {1200} src = {path}/>
      </div>
    )
  }

  return null;
}

const Review = ({format = 'mini', index, data, className, key, animationConfig}) => {


    if(format === 'mini')
    {
      return (
        <Flip {...animationConfig[0]}>
          <div className = {'col-span-12 md:col-span-6 lg:col-span-4 h-96 '+className} key = {key}>
            <h4 className = 'w-full h-16 text-xl font-bold'>{data.title || 'Sin titulo'}</h4>
            <p className="w-full my-4 text-sm text-gray-600">
              {data.type || 'No especificado'}
            </p>
            { getMediaByType(data.mediaType, data.path, 'h-64')}
            <p className="w-full my-4 text-sm text-gray-600 h-36">
              {data.description || 'Sin descripción'}
            </p>
            <Link href="/thinkers" as="/pensadores">
              <a className="w-full mt-6 text-center md:text-left hover:text-red-600">
                Ver más
              </a>
            </Link>
            <Divider className = 'mt-2'/>
          </div>
        </Flip>
      )
    }

    if(format === 'article')
    {
      let opc = [
        { left: true, top: true, cascade: true },
        { right: true, top: true, cascade: true },
      ];

      return (
        <Rotate {...opc[(index + 1) % 2 == 0 ? 1 : 0]}>
          <div className = 'col-span-12 mt-10 lg:col-span-6'>
            <h3 className = 'my-2 text-2xl font-bold text-red-600'>{data.type}</h3>
            <h4 className = 'w-full my-10 text-xl font-bold lg:w-7/12'>{data.title || 'Sin titulo'}</h4>
            <p className="w-full h-32 pr-10 my-4 overflow-y-scroll text-sm text-gray-600">
              {data.date && <font className = 'italic'>{data.date}</font>}{data.description || 'Sin descripción'}
            </p>
            <p className = 'mt-12 mb-20'>{data.footer}</p>
            <a href = {data.link} className="w-full col-span-12 mt-12 text-center text-red-600 hover:text-red-800">
              Ver artículo
            </a>
            <Divider className = 'mt-2'/>
          </div>
        </Rotate>
      );
    }

    return (
      <>
        <h3 className = 'my-2 text-2xl font-bold text-red-600'>{data.type}</h3>
        <div className = 'grid grid-cols-12 col-span-12 gap-4 mb-16 bg-gray-200'>
          <Slide {...animationConfig[0]}>
            <div className = 'col-span-12 md:col-span-6'>
              { getMediaByType(data.mediaType, data.path, 'h-52 lg:h-96')}
            </div>
          </Slide>
          <Fade {...animationConfig[1]}>
            <div className = 'col-span-12 px-8 py-6 md:pr-4 md:col-span-6'>
              <h4 className = 'w-full mt-2 text-xl font-bold'>{data.title || 'Sin titulo'}</h4>
              <p className="w-full my-4 text-sm text-gray-600 whitespace-pre-line">
                {data.description || 'Sin descripción'}
              </p>
              {data.link &&
                <a href = {data.link} className="w-full col-span-12 my-20 text-center text-red-600 hover:text-red-800">
                  Conocer más
                </a>
              }
            </div>
          </Fade>
        </div>
      </>
    )
}

export default Review;
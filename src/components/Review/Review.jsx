import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
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

const Review = ({format = 'mini',  data, className, key, animationConfig}) => {


    if(format === 'mini')
    {
      return (
        <Flip {...animationConfig[0]}>
          <div className = {'col-span-4 h-96 '+className} key = {key}>
            <h4 className = 'w-full h-16 text-xl font-bold'>{data.title || 'Sin titulo'}</h4>
            <p className="w-full my-4 text-sm text-gray-600">
              {data.type || 'No especificado'}
            </p>
            { getMediaByType(data.mediaType, data.path, 'h-64')}
            <p className="w-full my-4 text-sm text-gray-600 h-36">
              {data.description || 'Sin descripción'}
            </p>
            <Link href="/thinkers" as="/pensadores">
              <a className="w-full mt-6 hover:text-red-600">
                Ver más
              </a>
            </Link>
            <Divider className = 'mt-2'/>
          </div>
        </Flip>
      )
    }

    return (
      <div className = 'col-span-12'>
        <Slide {...animationConfig[0]}>
          <div className = 'col-span-6'>
            <h3 className = 'my-2 text-2xl font-bold text-red-600'>{data.type}</h3>
            { getMediaByType(data.mediaType, data.path, 'h-96')}
          </div>
        </Slide>
        <Flip {...animationConfig[1]}>
          <div className = 'col-span-6'>
            <h4 className = 'w-full text-xl font-bold'>{data.title || 'Sin titulo'}</h4>
            <p className="w-full my-4 text-sm text-gray-600">
              {data.description || 'Sin descripción'}
            </p>
          </div>
        </Flip>
      </div>
    )
}

export default Review;
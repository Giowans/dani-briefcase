import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import { useRouter } from "next/router";

const Gallery = ({colSpan = 12, rows = 1, cols = 1, formatedImages, itemConfig, interval = 3000, random = true, ...props}) => {

  // States
  const [galleryItems, setGalleryItems] = useState([]);

  //router
  const router = useRouter();

  // Methods
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
  }

  const makeGalleryItemFormat = () => {
    const totalChilds = (rows * cols);
    const itemClassName = `col-span-${Math.round(colSpan/cols)}`;
    var itemsOfGallery = [];
    var imagesToRest = [...formatedImages];

    console.log('las images before: ', imagesToRest);
    if(random)
    {
      imagesToRest = shuffle(imagesToRest);
    }

    
    if(imagesToRest.length < totalChilds)
    {
      for(var x = 0; x < totalChilds - imagesToRest.length; x++)
      {
        imagesToRest.push(imagesToRest[x]);
      }
    }

    var residue = imagesToRest.length/totalChilds;
    const toRest = Math.floor(residue || 1);

    console.log('las images after: ', imagesToRest)

    for(var i = 0; i < totalChilds; i++)
    {
      var galleryItem = {
        id: 'g-item-'+i,
        className: itemClassName,
        interval: random ? getRandomInt(8000, 14000): interval,
        images: []
      }

      for(var j=0; j < toRest; j++)
      {
        if(imagesToRest.length > 0)
        {
          var imageItem = imagesToRest.shift();
          console.log(j, toRest, imageItem);
          galleryItem.images.push(imageItem);
        }
      }
      itemsOfGallery.push(galleryItem);
    }
    console.log(itemsOfGallery);
    setGalleryItems(itemsOfGallery);
  }

  useEffect(() => {
    makeGalleryItemFormat();
  }, [cols])


  return (
    <div className = {`mt-9 flex grid flex-col gap-4 lg:grid-cols-${colSpan} lg:col-span-${colSpan} md:col-span-${colSpan} sm:col-span-12 xs:col-span-12 md:grid-cols-${colSpan} xs:grid-cols-${colSpan} sm:grid-cols-${colSpan} w-full h-96`}>
      {galleryItems.map((item, index) => {
        return (
          <GalleryItem className = {item.className} id = {index} interval = {item.interval} images = {item.images} onSelect = {(id) => router.push('/briefcase/' + id)} />
        );
      })}
    </div>
  );
}

export default Gallery;
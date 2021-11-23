import { useRouter } from "next/router";
import { useEffect } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Divider from "../../src/components/Divider/Divider";
import YoutubeEmbed from "../../src/components/YoutubeEmbed";
import Image from "next/image";

const AboutMePage = () => {
  const router = useRouter();
  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <div className="col-span-4">
        <h1 className="w-full col-span-12 text-4xl font-bold">
          <LightSpeed left cascade>
            Sobre mi
          </LightSpeed>
        </h1>
      </div>
      <Divider className="my-4" />
      <YoutubeEmbed className="h-screen col-span-12" embedId="cPfABz95g2M" />
      <div className="col-span-6">
        <Image width={800} height={1200} src="/images/aboutMe/me.png" />
      </div>
      <div className="col-span-6 px-2 py-6">
        <h2 className="w-full text-left">
          Hola, soy <font className="text-red-600">Daniel</font>
        </h2>
        <p className="mt-4 text-sm text-gray-600">
          Mi nombre es Erick Daniel Aranda Palomera, diseñador gráfico. Desde
          pequeño me consideré amante de la música, el arte, y sin saberlo, del
          diseño. Conocí el diseño gráfico cuando entre a la preparatoria y se
          nos dio a elegir entre 4 carreras técnicas, por lo que escogí diseño
          gráfico sin saber a ciencia cierta de que se trataba, poco a poco
          encontré una pasión por esta carrera y todo lo relacionado a ella.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Siempre tuve más exigencias, por ser el mayor, gracias a eso he
          desarrollado carácter, además de honestidad por parte de mis padres,
          que siempre velan por lo que es correcto, uno de los pasatiempos que
          más disfrutaba era sin lugar a dudas el poder dibujar y crear arte, me
          encantaba visitar museos y ver las pinturas, esculturas o
          representaciones de otros artistas, en verdad me veía como un artista.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;

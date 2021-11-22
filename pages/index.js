import Image from "next/image";
import Link from "next/link";
import Gallery from "../src/components/Gallery/Gallery";
import Divider from "../src/components/Divider/Divider";

const images = [
  {
    path: "/images/w1.png",
    title: "Corazón Contento",
  },
  {
    path: "/images/w2.png",
    title: "Los Bunkers Identidad Ep",
  },
  {
    path: "/images/w3.png",
    title: "Séptima Taquilla",
  },
  {
    path: "/images/w4.png",
    title: "UNISUN",
  },
  {
    path: "/images/w5.png",
    title: "Neon Eyes",
  },
  {
    path: "/images/w6.png",
    title: "UVIC",
  },
  {
    path: "/images/w7.png",
    title: "Joys",
  },
  {
    path: "/images/w8.png",
    title: "MIPAA",
  },
  {
    path: "/images/w9.png",
    title: "Blacky el diablito con suerte",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-screen -mx-32">
        <Image width={2100} height={985} src="/images/banner.png" />
      </div>
      <div className="grid w-full h-full gap-4 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
        <div className="flex flex-col items-center justify-center lg:col-span-5 md:col-span-6 sm:col-span-6">
          <Image src="/images/1.png" width={685} height={917} />
          <p className="mt-5 text-xs italic font-light text-gray-600">
            Este soy yo cuando ingrese a la universidad de Guadalajara a
            estudiar diseño gráfico.
          </p>
        </div>
        <div className="flex flex-col items-center px-8 pl-8 lg:col-span-7 md:col-span-12 sm:col-span-12">
          <h2 className="w-full text-left">Hola, soy Daniel</h2>
          <p className="mt-4 text-sm text-gray-600">
            Mi nombre es Erick Daniel Aranda Palomera, diseñador gráfico. Desde
            pequeño me considere amante de la música, el arte, y sin saberlo,
            del diseño. Conocí el diseño gráfico cuando entre a la preparatoria
            y se nos dio a elegir entre 4 carreras técnicas, por lo que escogí
            diseño gráfico sin saber a ciencia cierta de que se trataba, poco a
            poco encontré un pación por esta carrera y todo lo relacionado a
            ella.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Desde pequeño siempre tuve más exigencias, por ser el mayor, he
            desarrollado carácter, además de honestidad por parte de mis padres,
            que siempre velan por lo que es correcto, uno de los pasatiempos que
            más disfrutaba era sin lugar a dudas el poder dibujar y crear arte,
            me encantaba visitar museos y ver las pinturas, esculturas o
            representaciones de otros artistas, en verdad me veía como un
            artista.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Finalizando mi preparatoria, decidí tomar un semestre sabático,
            trabajando como diseñador en una empresa de impresión y tuve el
            placer de conocer más de esta rama y tome la decisión de continuar
            con mis estudios a nivel superior entrando a la licenciatura de
            diseño gráfico de la universidad de Guadalajara.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            En el segundo semestre del año 2018 ingreso a la universidad con 19
            años de edad, y comienzo a adentrarme al mundo del diseño, las artes
            gráficas y todo aquello con lo que ya me había familiarizado a lo
            largo de mi vida, comencé a entender el diseño como un trabajo
            formal, más allá de los términos que mal lo catalogan , comencé a
            verlo como lo que era, una rama funcional que busca solucionar
            problemas reales.{" "}
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Me gustaría poder hacer un cambio en el mundo, con el diseño gráfico
            y dar a la sociedad algo más que solo publicidad, se que el mundo
            necesita del diseño, pero es bueno enseñar diseño de la manera
            correcta.
          </p>

          <Link href="/aboutMe" as="/sobre-mi">
            <a className="w-full mt-4 text-red-600 hover:text-red-800">
              Conoce más sobre mi
            </a>
          </Link>
        </div>
        <Divider />
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
          <div className="flex flex-col items-center lg:col-span-6 md:col-span-6 sm:col-span-12">
            <h2 className="w-full text-red-600">Proyectos</h2>
            <p className="mt-4 text-sm text-gray-600 lg:col-span-6">
              Cada proyecto es único, por lo tanto todos agregan algo a mi
              crecimiento personal, siempre hay alguna nueva cosa por aprender y
              me encantaría poder compartirte algunos de los proyectos en los
              que he trabajado.
            </p>
          </div>
        </div>
        <Gallery
          colSpan={6}
          cols={1}
          rows={1}
          random={true}
          formatedImages={images}
        />
        <Gallery
          colSpan={6}
          rows={2}
          cols={2}
          formatedImages={images}
          random={true}
        />
        <Gallery
          colSpan={6}
          cols={2}
          rows={2}
          random={true}
          formatedImages={images}
        />
        <Gallery
          colSpan={6}
          rows={1}
          cols={1}
          formatedImages={images}
          random={true}
        />
        <Link href="/briefcase" as="/portafolio">
          <a className="w-full col-span-12 my-20 text-center text-red-600 hover:text-red-800">
            Ver todos los proyectos
          </a>
        </Link>

        <Divider />

        <h2 className="col-span-12 mb-20">
          <font className="text-red-600">Pensar</font> es parte del proceso para{" "}
          <font className="text-red-600">crear ideas</font>
        </h2>
      </div>
    </>
  );
}

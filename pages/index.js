import Image from "next/image";
import Link from "next/link";
import Gallery from "../src/components/Gallery/Gallery";
import Divider from "../src/components/Divider/Divider";
import Review from "../src/components/Review/Review";
import Footer from "../src/components/Footer";
import Fade from "react-reveal/Fade";
import { briefcases } from "../src/staticData/briefcases";

const thinkers = [
  {
    title: "Sensacional del diseño mexicano",
    type: "Blog",
    mediaType: "image",
    path: "/images/t1.png",
    description: `Sensacional del diseño mexicano es una serie de documentales que fueron elaborados en base al libro recopilatorio de sensacional del diseño por Juan Carlos Mena, Déborah Holtz y Oscar Reyes. El  documental esta divido en diferentes ramas de lo que es la gráfica popular mexicana.`,
  },
  {
    title: "Helvetica",
    type: "Documental",
    mediaType: "image",
    path: "/images/t2.png",
    description:
      "Helvetica es un documental de diseño gráfico enfocado en la famosa tipografía con el mismo nombre del título, nos muestra una forma de pensar hacía la publicidad, la comunicación y en general sobre la cultura visual. ",
  },
  {
    title: "Foroalfa: el universo de las marcas con mejor explicación",
    type: "Blog",
    mediaType: "youtube",
    path: "HzsnhUo_5mo",
    description:
      "Foroalfa es un blog en linea creado por Norberto Chaves, Luciano Cassisi, y  Raúl Beluccia  donde muestran distintos artículos que hablan sobre el diseño gráfico en distintas áreas. Además cuentan con un canal de YouTube donde hablan sobre diseño de marca. ",
  },
  {
    title: "Marco creativo: Un apasionado de las marcas",
    type: "Blog",
    mediaType: "image",
    path: "/images/t4.png",
    description:
      "Marco es un diseñador español apasionado por el mundo de las marcas, cuenta con su propio estudio donde desarrolla estructuras de marcas, así como diseño de elementos identificatorios del mismo. Un diseñador con grandes ideas que enseña sobre lo que hace.",
  },
  {
    title: "Creación de un logotipo original desde cero",
    type: "Clase",
    mediaType: "image",
    path: "/images/t5.png",
    description:
      "Creación de un logotipo desde cero es una master class, de domestika, donde podrás aprender como su nombre lo indica, cómo crear una marca, con una metodología propia de tatabi estudio.",
  },
  {
    title: "Fundamentos del diseño, un libro que debes leer",
    type: "Libro",
    mediaType: "image",
    path: "/images/t6.png",
    description:
      "Fundamentos del diseño de Wucios Wong, es un libro excepcional donde habla completamente de las bases del diseño; la figura, formas, texturas y demás, un libro que sin lugar a dudas deber leer si quieres entrar al mundo del diseño.",
  },
];

export default function Home() {
  return (
    <>
      <Fade left>
        <div className="w-screen -mx-12 lg:-mx-32">
          <Image width={2100} height={985} src="/images/banner.png" />
        </div>
      </Fade>
      <div className="grid w-full h-full grid-cols-12 gap-4 lg:py-11">
        <div className="flex flex-col items-center justify-center col-span-12 lg:col-span-5">
          <h2 className="block w-full p-8 mt-16 lg:hidden">Hola, soy Daniel</h2>
          <Image
            layout="intrinsic"
            src="/images/1.png"
            width={685}
            height={917}
          />
          <p className="mt-5 text-xs italic font-light text-gray-600">
            Este soy yo cuando ingrese a la universidad de Guadalajara a
            estudiar diseño gráfico.
          </p>
        </div>
        <div className="flex flex-col items-center col-span-12 lg:pl-8 lg:px-8 lg:col-span-7">
          <h2 className="hidden w-full text-left lg:block">Hola, soy Daniel</h2>
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
        <Divider className="my-10" />
        <div className="grid grid-cols-12 col-span-12">
          <div className="flex flex-col items-center col-span-12 md:col-span-6">
            <h2 className="w-full text-red-600">Proyectos</h2>
            <p className="mt-4 text-sm text-gray-600 lg:col-span-6">
              Cada proyecto es único, por lo tanto todos agregan algo a mi
              crecimiento personal, siempre hay alguna nueva cosa por aprender y
              me encantaría poder compartirte algunos de los proyectos en los
              que he trabajado.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Gallery
            colSpan={6}
            cols={1}
            rows={1}
            random={true}
            formatedImages={briefcases}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Gallery
            colSpan={6}
            rows={2}
            cols={2}
            formatedImages={briefcases}
            random={true}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Gallery
            colSpan={6}
            cols={2}
            rows={2}
            random={true}
            formatedImages={briefcases}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Gallery
            colSpan={6}
            rows={1}
            cols={1}
            formatedImages={briefcases}
            random={true}
          />
        </div>
        <Link href="/briefcase" as="/portafolio">
          <a className="w-full col-span-12 my-20 text-center text-red-600 hover:text-red-800">
            Ver todos los proyectos
          </a>
        </Link>

        <Divider className="my-10" />

        <h2 className="col-span-12 mb-20">
          <font className="text-red-600">Pensar</font> es parte del proceso para{" "}
          <font className="text-red-600">crear ideas</font>
        </h2>
        {thinkers.map((thinker, index) => {
          return (
            <Review
              className="h-screen mt-8"
              data={thinker}
              key={`${thinker.title}-${index}`}
              animationConfig={[{ left: true, cascade: true }]}
            />
          );
        })}

        <Link href="/thinkers" as="/pensadores">
          <a className="w-full col-span-12 my-16 text-center text-red-600 md:my-6 hover:text-red-800">
            Ver todas las reseñas
          </a>
        </Link>

        <Divider className="mt-10 mb-0 md:mt-20" />

        <Footer extended animationConfig={{ cascade: true }} />
      </div>
    </>
  );
}

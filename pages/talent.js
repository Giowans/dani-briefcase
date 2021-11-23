import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Divider from "../src/components/Divider/Divider";
import Image from "next/image";
import Link from "next/link";
import Footer from "../src/components/Footer";

const talents = [
  {
    path: "/images/briefcase/ta1.png",
    list: [],
    title: "Identidad de Marca",
    description: `El diseño de identidad de marca es aquel que relaciona directamente lo que tu empresa quiere decir al público, no lo confundamos con Imagen de marca, ya que esta es lo que las personas piensan de tí, la identidad va más enfocado a un tema de realidad, lo que eres y lo que deseas que los otros vean de tí, por eso un buen diseño de identidad además de una buena gestión nos da como resultado una buena imagen ante el público al que deseamos llegar, eso se traduce en ventas, confianza, y hasta fanatismo por tus productos o servicios.

    Para ello he desarrollado un paquete de branding para tí, para que puedas comunicar lo que realmente deseas ser.`,
  },
  {
    path: "/images/briefcase/ta2.png",
    title: "Impresión",
    description: `Los medios impresos no solo son tarjetas de presentación y volantes, podemos llegar a diferentes lugares con tu impresión ya sea que necesites algún libro, una lona o banner para colocar afuera de tu negocio, hasta los menús para ese restaurante que tanto sueñas.

    Para ello te ofrezco los siguientes medios impresos para que tu marca llegue a los lugares que necesitas.`,

    list: [
      "Impresión digital",
      "Serigrafía",
      "Hojas membretadas",
      "Plotter",
      "Lonas",
      "Tarjetas de presentiación",
      "Viniles impresos",
    ],
  },
  {
    path: "/images/briefcase/ta3.png",
    title: "Diseño de marca (Logotipo)",
    description: `El logotipo es el rostro de tu negocio, es tu sello, tu firma, es tu manera de decir esté articulo es mío, si bien muchos piensan que el logo debería comunicar todos los valores de la empresa, esto realmente es un mito ya que no hay manera de que un logo exprese completamente lo que es tu empresa y todos los valores de está.

    Su funcionalidad principal es la identificar a tu empresa, y con el paso del tiempo se puede convertir en uno de los activos más importantes de tu empresa, además un buen diseño de logotipo ayudara a identificar claramente que es lo que haces en algunos de los casos esto ayuda peculiarmente para que puedas entrar a una categoría predeterminada.
    `,
    list: [],
  },
  {
    path: "/images/briefcase/ta4.png",
    title: "Diseño Editorial",
    description: `El diseño editorial no solo lo encuentras en los libros y revistas que llegas a ver en algunos puestos de periódicos o librerías, existen diferentes aplicaciones del diseño editorial que seguramente has visto o que son escenciales para tu negocio, tal es el caso de los manuales corporativos, los trípticos, catálogos de productos, boletines, PDF interactivo, inclusive los informes empresariales que se acostumbran a dar cada año o cada mes.

    El diseño editorial es una materia complicada, debemos conocer claramente sobre reticulación, tipografía, elementos auxiliares, elementos dominantes, peso visual, entre otras cosas, lo cual lo convierte en un trabajo exhaustivo. 
    `,
    list: [],
  },
  {
    path: "/images/briefcase/ta5.png",
    title: "Packaging",
    description: `El packaging o diseño de envase, es parte escencial si esque vendes algun producto o servicio, la función principal de esté es poder proteger al articulo que envuelve, además de hacerlo más sencillo de ordenar y de manipular para su envio.

    Actualmente el diseño de packaging no se queda ahí sino que se convierte en una estrategia de venta, incluso en algo totalmente agradable para el usuario que  puede llegar a convertirlo en un artículo coleccionable.
    
    Si necesitas que tu producto se vaya del aparador, el diseño de envase sin duda puede ser una opción, además de facilitar la venta y proteger al producto, esté debe cumplir con ciertas características regulatorias para poder venderse.`,
    list: [],
  },
  {
    path: "/images/briefcase/ta6.png",
    title: "Social Media",
    description: `El mundo de las redes sociales ha tenido un gran crecimiento y más que socializar se ha convertido en un medio de ventas realmente fuerte para algunos, actualmente la mayoría de las empresas han migrado a la venta en línea y muchas otras son ya nativas digitales.

    El diseño de contenido social media o publicidad para redes sociales puede ayudarte a sobresalir de la dura competencia que existe ya en el mercado, debes tener en cuenta que una estrategia de comunicaci´ón para tu negocio puede ayudarte a incrementar tus ventas, posicionar tu página, conseguir seguidores y además actualmente otorga más seguridad a las personas que compran por esté medio.`,
    list: [],
  },
];

const TalentPage = () => {
  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <div className="col-span-4">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Zoom left cascade>
            Mis talentos
          </Zoom>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Estos son los servicios que tengo para tí, te dejaremos una pequeña
          descripción de cada uno para ver si alguno calza con tu proyecto.
        </p>
      </div>
      <Divider className="mt-2" />

      {talents.map((talent, index) => {
        return (
          <div className="grid w-full h-full grid-cols-12 col-span-12 gap-4 mb-20 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12">
            <Rotate left>
              <div className="col-span-6 h-96">
                <Image layout="fill" src={talent.path} />
              </div>
            </Rotate>
            <Rotate right cascade>
              <div className="col-span-6 px-4 py-10 h-96">
                <h4 className="w-full mt-2 text-xl font-bold text-red-600">
                  {talent.title || "Sin titulo"}
                </h4>
                <p className="w-full my-4 text-sm text-gray-600 whitespace-pre-line">
                  {talent.description || "Sin descripción"}
                </p>
                <ul>
                  {talent.list.length > 0 &&
                    talent.list.map((atr, index) => {
                      return (
                        <li className="inline px-2 text-sm text-gray-600">
                          {atr}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </Rotate>
          </div>
        );
      })}

      <div className="flex flex-col items-center justify-center col-span-12 mb-16">
        <h1 className="w-full col-span-12 my-2 text-3xl font-bold text-center">
          <Zoom left cascade>
            Seguir mirando proyectos
          </Zoom>
        </h1>
        <Link className="w-full" href="/briefcase" as="/portafolio">
          <a className="w-full my-2 text-center text-red-600 hover:text-red-800">
            Volver a portafolio
          </a>
        </Link>
      </div>
      <Divider className="mb-2" />
      <Footer
        extended={true}
        className={"mt-2"}
        animationConfig={{ bottom: true, cascade: true }}
      />
    </div>
  );
};

export default TalentPage;

import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import BriefcaseItem from "../../src/components/BriefcaseItem";
import Divider from "../../src/components/Divider/Divider";
import Tabs from "../../src/components/Tabs";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";

const briefcasePreview = [
  {
    path: "/images/w1.png",
    title: "Corazón Contento",
    detail: "",
    year: "2021",
    type: "Escolar",
  },
  {
    path: "/images/w2.png",
    title: "Los Bunkers",
    detail: "Identidad Ep",
    year: "2021",
    type: "Escolar",
  },
  {
    path: "/images/w3.png",
    title: "La Séptima Taquilla",
    detail: "",
    year: "2019",
    type: "Escolar",
  },
  {
    path: "/images/w10.png",
    title: "Otli",
    detail: "Identidad",
    year: "2020",
    type: "Trabajo",
  },
  {
    path: "/images/w6.png",
    title: "UVIC",
    detail: "Identidad",
    year: "2019",
    type: "Trabajo",
  },
  {
    path: "/images/w7.png",
    title: "Joys",
    detail: "Diseño de marca",
    year: "2020",
    type: "Trabajo",
  },
  {
    path: "/images/w11.png",
    title: "Bestiario",
    detail: "Diseño editorial",
    year: "20219",
    type: "Trabajo",
  },
  {
    path: "/images/w12.png",
    title: "Klatomato y La ancestral",
    detail: "",
    year: "2018",
    type: "Trabajo",
  },
  {
    path: "/images/w8.png",
    title: "MIPAA",
    detail: "Identidad",
    year: "2020",
    type: "Trabajo",
  },
  {
    path: "/images/w4.png",
    title: "UNISUN",
    detail: "Social Media",
    year: "2020 a 2021",
    type: "Trabajo",
  },
  {
    path: "/images/w9.png",
    title: "Blacky",
    detail: "Libro álbum",
    year: "2019",
    type: "Escolar",
  },
  {
    path: "/images/w5.png",
    title: "Neon Eyes",
    detail: "Identidad",
    year: "2021",
    type: "Escolar",
  },
];

const talents = [
  {
    path: "/images/briefcase/ta1.png",
    title: "Identidad de Marca",
  },
  {
    path: "/images/briefcase/ta2.png",
    title: "Impresión",
  },
  {
    path: "/images/briefcase/ta3.png",
    title: "Logotipo",
  },
  {
    path: "/images/briefcase/ta4.png",
    title: "Editorial",
  },
  {
    path: "/images/briefcase/ta5.png",
    title: "Packaging",
  },
  {
    path: "/images/briefcase/ta6.png",
    title: "Social Media",
  },
];

const creativeProcess = [
  {
    title: "Conocer el tipo de proyecto a realizar",
    description: `Reconocemos la pieza de diseño que vamos a reproducir, y su finalidad, me encanta poder platicar con los clientes sobre todo lo relacionado a su proyecto, a quién nos dirigiremos y diagnosticar al cliente con lo que en verdad puede funcionarle, es parte del trabajo que ofremos en este primer punto.

      Algunos puntos claves de la empresa tambien se abordan en este paso, recopilamos toda la información necesaria.`,
  },
  {
    title: "Función de la pieza gráfica a realizar",
    description: `Me gusta poder pensar en la funcionalidad del proyecto, cuáles son las caracteristicas más importantes para poder cumplir con nuestro objetivo. 

    Definimos las necesidades alcanzables de manera gráfica y los objetivos reales a realizar con esté proyecto, asi como definir la necesidad primordial que debe cumplir.`,
  },
  {
    title: "Analisis y relevamiento de la categoría",
    description: `En esté apartado nos encargamos de reconocer las piezas gráficas que resuelvan la misma necesidad que necesitamos resolver contigo, identificamos las piezas de diseño que ya existen y que resolvieron el problema al que nos estamos enfrentando.

    Reconocemos los puntos importante de la categoría a la que te diriges, así cómo las tipologías, los códigos estilísticos, distinguir las peculiaridades de cada estilo si es que las hay de acuerdo al contexto en el que tú te desarrollas.`,
  },
  {
    title: "Bocetajes e ideas",
    description: `Ya que conocemos todo lo relacionado al proyecto y sabemos con certeza a lo que nos enfrentamos, comenzamos una lluvia de ideas con lápiz, y papel para poder encontrar la mejor resolución para tu proyecto.

    El bocetaje es importante ya que capturamos la esencia de nuestras ideas y le damos vida, nos ayuda a conceptualizar completamente el proyecto, para despues pasar a la parte digítal.
    
    Hay diferentes tipos de bocetos para diferentes tipos de proyectos, por ende dar un tratamiento especial al boceto es parte importante de que el proyecto cumpla con sus funciones.`,
  },
  {
    title: "Creación del diseño y pruebas de funcionalidad",
    description: `Una vez que conceptualizamos las ideas, es la hora de pasar al ordenador, y verificar que nuestras ideas realmente funcionen, en este proceso tambien encontramos una etapa de bocetaje según sea el caso.

    Nos gusta exprimir completamente la idea para poder ver todas las maneras de aplicación que se le puede dar a esta.`,
  },
  {
    title: "Ajustes finos",
    description: `Una vez que llegamos a la solución debemos hacer pequeños ajustes, que los denominamos como ajustes finos, es en estos donde ya entra el buen diseño.

    Encargandonos de detalles como el espaciado de la tipografía, los tamaños, el grosor, si es impreso en qué medida debe estar, si es web en que plataforma se vera para poder hacer todas las adecuaciones para que el diseño pase de un boceto a un proyecto profesional.`,
  },
];

const BriefcasePage = () => {
  const router = useRouter();
  const [imageData, setImageData] = useState(briefcasePreview);

  const onSelectedTab = (newValue) => {
    if (newValue === "Todos") {
      setImageData(briefcasePreview);
      return;
    }

    setImageData(briefcasePreview.filter((item) => item.type === newValue));
  };

  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <div className="col-span-4">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Zoom left cascade>
            Portafolio
          </Zoom>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Diseño para encontrar soluciones gráficas.
        </p>
      </div>
      <div className="flex justify-end col-span-4 col-start-9 pt-8">
        <Tabs
          options={["Todos", "Escolar", "Trabajo"]}
          onSelect={(value) => onSelectedTab(value)}
          className="pt-20 pl-3"
        />
      </div>
      <Divider className="mt-2" />
      {imageData.map((item, index) => {
        return (
          <BriefcaseItem
            className="col-span-4 mt-3 h-80"
            briefcaseData={item}
            key={item.title + item.year + index}
          />
        );
      })}

      <Divider className="mt-16 mb-8" />

      <div className="col-span-5">
        <h1 className="w-full text-4xl font-bold">
          <Zoom right cascade>
            Mis talentos
          </Zoom>
        </h1>
        <p className="w-full pr-2 mt-4 mb-8 text-sm text-gray-600 text-start">
          Ofrezco una variedad de servicios para poder hacer crecer tu proyecto,
          me interesa poder ayudarte a cumplir los objetivos con un diseño que
          resuelva las necesidades de tu marca o proyecto.
        </p>
      </div>

      <div className="grid grid-cols-12 col-span-12 gap-4">
        {talents.map((item, index) => {
          return (
            <BriefcaseItem
              onSelect={() => router.push("/talent")}
              minimalist
              className="h-64 col-span-4 mt-3"
              briefcaseData={item}
              key={item.title + item.path + index}
            />
          );
        })}
      </div>

      <Divider className="mt-16 mb-8" />

      <div className="col-span-6">
        <h1 className="flex flex-row w-full text-4xl font-bold">
          <Zoom bottom cascade>
            Mi proceso <font className="text-red-600">creativo</font>
          </Zoom>
        </h1>
        <p className="w-full pr-2 mt-4 mb-8 text-sm text-gray-600 text-start">
          El uso de una metodología bien planeada nos da una mejor ejecución del
          trabajo, además de que nos ayuda a organizarnos y conocer la manera en
          que trabajamos.
        </p>
        <p className="w-full pr-20 mt-4 mb-8 text-sm text-gray-600 text-start">
          A continuación te presento la metología que empleo en cada uno de mis
          proyectos para poder resolverlos de la manera correcta.
        </p>
      </div>

      <div className="grid grid-cols-12 col-span-12 gap-4">
        {creativeProcess.map((item, index) => {
          let opc = [
            { left: true, top: true, cascade: true },
            { right: true, top: true, cascade: true },
          ];
          return (
            <Rotate {...opc[(index + 1) % 2 == 0 ? 1 : 0]}>
              <div className="col-span-6 p-8 bg-gray-300">
                <div className="flex flex-row items-center justify-start w-full">
                  <h1 className="text-6xl font-bold text-red-600">
                    0{index + 1}
                  </h1>
                  <h2 className="w-3/6 ml-10 text-2xl text-gray-700 text-start">
                    {item.title}
                  </h2>
                </div>
                <p className="w-full h-64 mt-12 text-sm text-gray-600 whitespace-pre-line text-start">
                  {item.description}
                </p>
              </div>
            </Rotate>
          );
        })}
      </div>

      <Divider className="mt-20 mb-0" />

      <Footer extended animationConfig={{ left: true, cascade: true }} />
    </div>
  );
};

export default BriefcasePage;

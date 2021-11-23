import { useRouter } from "next/router";
import { useState } from "react";
import Flip from "react-reveal/Flip";
import Tabs from "../../src/components/Tabs";
import Divider from "../../src/components/Divider/Divider";
import BriefcaseItem from "../../src/components/BriefcaseItem";
import Review from "../../src/components/Review/Review";
import Footer from "../../src/components/Footer";

const menuItems = [
  {
    title: "Blog",
    path: "/images/thinkers/p1.png",
  },
  {
    title: "Artículo",
    path: "/images/thinkers/p2.png",
  },
  {
    title: "Documental",
    path: "/images/thinkers/p3.png",
  },
  {
    title: "Libro",
    path: "/images/thinkers/p4.png",
  },
  {
    title: "Clase",
    path: "/images/thinkers/p5.png",
  },
];

const reviewData = [
  {
    title: "Sensacional del diseño mexicano",
    link: "https://sensacional.mx/sensacional-tv/",
    type: "Documental",
    mediaType: "youtube",
    path: "itOBEKhKxEU",
    description: `Sensacional del diseño mexicano es una serie de documentales que fueron elaborados en base al libro recopilatorio de sensacional del diseño por Juan Carlos Mena, Déborah Holtz y Oscar Reyes, el documental esta dividido en diferentes ramas de lo que es la gráfica popular mexicana, donde en cada capítulo puedes darte un bocado visual de lo que es la gráfica popular, la cultura mexicana y como el diseño se refleja en el mexicano. 

    Es una serie recopilatoria con lo mejor de todo el diseño popular, desde los rótulos, diseño de envase para bisutería, cartelería, entre otras cosas, los métodos de reproducción que se utilizan, conocerás a las personas que trabajan en estas áreas, sus pensamientos y su manera de interpretar el diseño un vistazo a las calles de la Ciudad de México y su cultura gráfica.
    `,
  },
  {
    title: "Helvetica",
    link: "http://www.area-documental.com/player.php?titulo=Helvetica",
    type: "Documental",
    mediaType: "image",
    path: "/images/t2.png",
    description: `Helvetica es un documental de diseño gráfico enfocado en la famosa tipografía con el mismo nombre del título, nos muestra una forma de pensar hacía la publicidad, la comunicación y en general sobre la cultura Visual. En este documental podemos ver entrevistas a los mejores representantes del diseño en el mundo como Paula Scher, Erick Spikerman, David Carson, Jonathan Hoefler, Matthew Carter,  Herman Zapf, entre otras celebridades.

    La película nace en conmemoración del 50 aniversario de la tipografía, nos cuenta cómo surgio y nos muestra el empleo que se le ha dado.  
    `,
  },
  {
    title: "Bueno Bonito y Barato",
    link: "https://origenarts.com/diseno-grafico-bueno-bonito-barato-documental/",
    type: "Documental",
    mediaType: "image",
    path: "/images/t8.png",
    description: `Un documental con una duración de 30 minutos, en este minidocumental o reportaje con entrevistas a distintos diseñadores de la ciudad de Murcia, España, realizado por Manuel Franco, nos da una probada de lo que es el mundo laboral del diseñador.

    Nos cuentan su visión del ambiente actual de trabajo y sobre la percepción que tiene la gente sobre nuestro trabajo, sin duda un montón de lecciones que nos ayuda a nuestra vida profesional y que debemos tomar en cuenta, si te interesa entrar al mundo del diseño es algo que no puedes dejar de ver.
    `,
  },
  {
    title: "La guía del diseño en México",
    link: "https://www.youtube.com/channel/UCwFaHK7ir817prgY5Y-qemw",
    type: "Documental",
    mediaType: "youtube",
    path: "MEFH9sme-k4",
    description: `La guía del diseño es una serie de documentales, enfocados claramente al diseño, sin embargo hay uno de los cuales nos lleva al mundo del diseño gráfico en México, con dos entrevistas a diseñadores de la Ciudad de México los cuales son Alejandro Magallanes diseñador editorial, diseñador de cartel e ilustrador, que nos da su perspectiva del diseño en México y una cátedra sobre su trabajo, y la metodología que emplea.

    Por otro lado tenemos a las Flamingets, otro estudio de diseño fundado por dos increíbles diseñadoras, Mara Soler y Daniela Villanueva, que han explorado el mundo de la producción fílmica y audiovisual con algunos comerciales y dirección creativa, videos, animaciones entre otras cosas. 
    `,
  },
  {
    title: "Foroalfa: el universo de las marcas con mejor explicación",
    link: "https://foroalfa.org/",
    type: "Blog",
    mediaType: "youtube",
    path: "xGfh-Fc1fic",
    description: `Foroalfa es un blog, creado por Luciano Cassisi, Norberto Chaves y Raúl Beluccia  con un canal de YouTube donde ofrecen, cursos, seminarios y clases. Dentro de su blog, podrás encontrar distintos artículos de interés que pueden ayudarte a entender el mundo de la marca o de alguna otra rama del diseño gráfico, dentro de su canal de YouTube ofrecen una gran variedad de videos en su mayoría relacionados con el diseño de marca, como lo son análisis, explicaciones, tips, pensamientos y demás.

    Puedes crear tu propia cuenta al entrar en su blog, es totalmente gratuito, y tienes la oportunidad de observar contenido de calidad en el mundo del diseño de marca, o si eres como yo que prefiere los videos, puedes suscribirte a su canal en YouTube y disfrutar del contenido.`,
  },
  {
    title: "Marco creativo: Un apasionado de las marcas",
    link: "https://www.youtube.com/c/marcocreativo",
    type: "Blog",
    mediaType: "youtube",
    path: "Mut1ehwIYeE",
    description: `Marco Creativo es originalmente un estudio de diseño en España, creado por Marco García, este estudio es especializado en el diseño de marca, y sistemas de identidad gráfica, su principal atractivo llega al crear un canal en YouTube donde el mismo Marco nos comparte sobre sus proyectos, enseña del diseño, da tips y hace análisis de los suscriptores.

    Marco Creativo es un canal más humano y si eres un principiante del diseño seguro te enamoras de esta carrera con este canal, Marco tiene una facilidad en la explicación para jóvenes diseñadores y conecta directamente con la personalidad misma de él, si buscas aprender de diseño de una manera fácil e interactiva te recomiendo seguir su canal de YouTube. 
    `,
  },
  {
    title: "Summa",
    link: "https://summa.es/blog/",
    type: "Blog",
    mediaType: "image",
    path: "/images/t9.png",
    description: `Summa es una agencia de diseño gráfico enfocada en el branding, con sede en España, algo que puedo decir es sobre su blog, donde puedes encontrar distintos artículos de interés donde nos mantienen al día con todo lo relacionado al branding, Packaging, Marcas, Logotipos entre otras cosas.

    Si deseas conocer sobre su trabajo también puedes visitar su portafolio para encontrarte con varias sorpresas agradables.
    `,
  },
  {
    title: "Landor",
    link: "https://landor.com/thinking",
    type: "Blog",
    mediaType: "image",
    path: "/images/t10.png",
    description: `Landor es otra de las agencias de diseño que cuenta con su propio blog, llamado Thinking, aquí nos comparte distintos artículos sobre el diseño gráfico, además de mostrarnos sobre su trabajo, el blog de landor contiene una variedad de artículos enfocados al mundo del diseño gráfico que nos ayuda a encontrar diferentes puntos de vista.

    Además no solo se publican artículos, sino que nos comparte una variedad también de blogs, y publicaciones, manteniéndonos actualizados sobre todos los temas que hay en el mundo del diseño.
    `,
  },
  {
    title: "Creación de un logotipo original desde cero",
    link: "https://www.youtube.com/watch?v=k-wLnSGxmjc",
    type: "Clase",
    mediaType: "image",
    path: "/images/t5.png",
    description: `Este curso o master class es impartida por la diseñadora Elena Sancho, fundadora de Tatabi Estudio. Podría describir el curso como un método interesante, principalmente aprenderemos la metodología que utiliza Elena para la creación de sus logotipos, además de algunos términos utilizados en el mundo del diseño de marca.

    Lo más interesante de este curso es que si eres principiante o avanzado en el mundo del diseño funciona bien, ya que nos ofrece herramientas para aprender a crear logotipos desde cero, y si eres un poco avanzado en el diseño de marca podrás aprender una metodología funcional para aplicar a tus proyectos.
    `,
  },
  {
    title: "Tipografía y branding: Diseño de un logotipo icónico",
    link: "https://www.youtube.com/watch?v=TQDIl0QfJ20",
    type: "Clase",
    mediaType: "image",
    path: "/images/t7.png",
    description: `Este curso o master class es impartida por la diseñadora Elena Sancho, fundadora de Tatabi Estudio. Podría describir el curso como un método interesante, principalmente aprenderemos la metodología que utiliza Elena para la creación de sus logotipos, además de algunos términos utilizados en el mundo del diseño de marca.

    Lo más interesante de este curso es que si eres principiante o avanzado en el mundo del diseño funciona bien, ya que nos ofrece herramientas para aprender a crear logotipos desde cero, y si eres un poco avanzado en el diseño de marca podrás aprender una metodología funcional para aplicar a tus proyectos.
    `,
  },
  {
    title: "Fundamentos del diseño por Wucius Wong",
    type: "Libro",
    mediaType: "image",
    path: "/images/t6.png",
    description: `Fundamentos del diseño de Wucios Wong, es un libro excepcional donde habla completamente de las bases del diseño, la figura, formas, texturas y demás, un libro que sin lugar a dudas deber leer si quieres entrar al mundo del diseño.

    Esté libro recopila, en un solo volumen tres de los textos fundamentales publicados por Wucius Wong, que abordan de diferentes planos los mismos principios del diseño.
    
    Este libro es recomendable para todos aquellos afines a la disciplina del diseño como tal, diseñadores de moda, diseñadores gráficos, diseñadores indutriales e incluso arquitectos.`,
  },
  {
    title: "1001 trucos publicitarios por Luc Dupont",
    type: "Libro",
    mediaType: "image",
    path: "/images/t11.png",
    description: `Fundamentos del diseño de Wucios Wong, es un libro excepcional donde habla completamente de las bases del diseño, la figura, formas, texturas y demás, un libro que sin lugar a dudas deber leer si quieres entrar al mundo del diseño.

    Esté libro recopila, en un solo volumen tres de los textos fundamentales publicados por Wucius Wong, que abordan de diferentes planos los mismos principios del diseño.
    
    Este libro es recomendable para todos aquellos afines a la disciplina del diseño como tal, diseñadores de moda, diseñadores gráficos, diseñadores indutriales e incluso arquitectos.`,
  },
  {
    title: "Notas para conceptualizar la gráfica popular mexicana",
    link: "https://www.ugr.es/~pwlac/G24_46MartinM_Checa-MPilar_Castro.html#:~:text=La%20gr%C3%A1fica%20popular%20se%20muestra,institucionales%20o%20conciertos%20de%20m%C3%BAsica.",
    type: "Artículo",
    mediaType: "text",
    path: "",
    date: "3 de Septiembre 2008.",
    description: `La gráfica popular se muestra como una forma de comunicación y diseño propia del paisaje urbano mexicano. Es el conjunto de elementos gráficos, imágenes, letras que, usando las paredes, vallas y otros recursos murales, sirven para comunicar reclamos comerciales, campañas institucionales o conciertos de música. En numerosos casos, la gráfica trasciende su sentido funcional para introducir aspectos como el humor y la ironía. El trabajo es una aproximación a sus principales características gráficas...`,
    footer: "Escrito por Martín M. Checa-Artasu y Pilar Castro Rodríguez",
  },
  {
    title: "Los 25 rebrandings más impactantes de 2021",
    link: "https://www.domestika.org/es/blog/9151-los-25-rebrandings-mas-impactantes-de-2021",
    type: "Artículo",
    mediaType: "text",
    path: "",
    date: "1 de Noviembre 2021.",
    description: ` Las marcas están por todas partes. Desde el smartphone que usamos a diario hasta la ropa que llevamos, a menudo estamos rodeados de logotipos, conceptos y valores de decenas de empresas. Sí tenemos en cuenta el mundo digítal, esta exposición se triplica y nos muestra cómo las marcas, aunque no sean personas, participan en la vida de miles de personas a un nivel casi íntimo...`,
    footer: "Escrito por Martín M. Checa-Artasu y Pilar Castro Rodríguez",
  },
  {
    title: "Paula Scher: Consejos Expertos de una diseñadora Pionera",
    link: "https://www.domestika.org/es/blog/2796-paula-scher-consejos-expertos-de-una-disenadora-pionera",
    type: "Artículo",
    mediaType: "text",
    path: "",
    date: "8 de Septiembre 2021.",
    description: ` Paula Scher no es ajena al éxito. Esta diseñadora, artista y profesora es el genio creativo detrás de las identidades visuales de algunas de las marcas más famosas del mundo. Su lista de clientes es envidiable, pues incluye a Coca-Cola, Tiffany & Co, Microsoft, el Ballet de la Ciudad de Nueva York y el Museo de Arte Moderno de Nueva York (MoMA).

    Una de las muchas cosas que hacen tan impresionante la carrera de... Scher es que logró el éxito en un momento en el que el sector era mayoritariamente dominado por hombres, con pocas mujeres ocupando un puesto directivo. Afortunadamente, fue capaz de encontrar inspiración femenina en otros campos, particularmente en publicaciones de moda.
    `,
    footer: "Escrito por Ricardo Jornet y traducido por Arturo Torres Landa",
  },
  {
    title: "Señalética así se trabaja la rama más práctica del diseño",
    link: "https://revistadigital.inesem.es/diseno-y-artes-graficas/senaletica/",
    type: "Artículo",
    mediaType: "text",
    path: "",
    date: "19 de Agosto 2020.",
    description: ` A menudo, tenemos la idea de que la señalética es la acción de realizar y colocar señales que nos sirvan de guía en diferentes lugares públicos. Realmente, no estamos del todo equivocados al atribuirle esta cualidad, aunque esta también coincide con lo que entendemos por señalización...`,
    footer: "Escrito por África García García",
  },
];

const ActivePageTitle = ({ activeTab }) => {
  if (activeTab === "Todos") {
    return (
      <div className="col-span-5">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Flip left cascade>
            Pensadores
          </Flip>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Me gustaría compartirles algunos de los pensadores de diseño que me
          parecen interesantes y aportan algo a mí manera de trabajar y pensar
          sobre el diseño gráfico.
        </p>
      </div>
    );
  }
  if (activeTab === "Blog") {
    return (
      <div className="col-span-5">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Flip left cascade>
            Blogs
          </Flip>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Estos son los blogs que me parecen de mejor interés para tí, dales una
          revisada si alguno te gusta.
        </p>
      </div>
    );
  }
  if (activeTab === "Documental") {
    return (
      <div className="col-span-5">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Flip left cascade>
            Documentales
          </Flip>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Estos son los documentales que me parecen de mejor interes para ti,
          dales una revisada si alguno te gusta.
        </p>
      </div>
    );
  }
  if (activeTab === "Libro") {
    return (
      <div className="col-span-5">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Flip left cascade>
            Libros
          </Flip>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Estos son los libros que me parecen de mejor interes para ti, dales
          una revisada si alguno te gusta.
        </p>
      </div>
    );
  }
  if (activeTab === "Artículo") {
    return (
      <div className="col-span-5">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Flip left cascade>
            Artículos
          </Flip>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Estos son los artículos que me parecen de mejor interes para ti, dales
          una revisada si alguno te gusta.
        </p>
      </div>
    );
  }
  if (activeTab === "Clase") {
    return (
      <div className="col-span-5">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold">
          <Flip left cascade>
            Clases
          </Flip>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          Estas son las clases que me parecen de mejor interes para ti, dales
          una revisada si alguna te llama la atención.
        </p>
      </div>
    );
  }
};

const ThinkersPage = ({ ...props }) => {
  const [imageData, setImageData] = useState(menuItems);
  const [activeTab, setActiveTab] = useState("Todos");
  const router = useRouter();

  const onSelectedTab = (newValue) => {
    setActiveTab(newValue);
    if (newValue === "Todos") {
      setImageData(menuItems);
      return;
    }

    setImageData(reviewData.filter((item) => item.type === newValue));
  };

  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <ActivePageTitle activeTab={activeTab} />
      <div className="flex justify-end col-span-6 col-start-7 pt-8">
        <Tabs
          parentActive={activeTab}
          options={[
            "Todos",
            "Blog",
            "Artículo",
            "Documental",
            "Libro",
            "Clase",
          ]}
          onSelect={(value) => onSelectedTab(value)}
          className="pt-20 pl-3"
        />
      </div>
      <Divider className="mt-2" />
      {imageData.map((item, index) => {
        if (activeTab === "Todos") {
          return (
            <BriefcaseItem
              onSelect={() => onSelectedTab(item.title)}
              deepStyles="text-4xl justify-center items-center"
              className="col-span-6 mt-3 h-80"
              briefcaseData={item}
              key={item.title + index}
            />
          );
        } else {
          return (
            <Review
              format={activeTab !== "Artículo" ? "standard" : "article"}
              className="col-span-6 mt-3 h-80"
              data={item}
              index={index}
              key={item.title + index}
              animationConfig={[
                { left: true, cascade: true },
                { right: true, cascade: true },
              ]}
            />
          );
        }
      })}

      <Footer
        className="mt-36"
        extended={false}
        animationConfig={{ cascade: true }}
      ></Footer>
    </div>
  );
};

export default ThinkersPage;

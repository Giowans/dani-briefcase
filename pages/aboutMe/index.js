import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import Divider from "../../src/components/Divider/Divider";
import YoutubeEmbed from "../../src/components/YoutubeEmbed";
import Image from "next/image";
import Carrousel from "../../src/components/Carrousel/Carrousel";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import Footer from "../../src/components/Footer";

function FileDownload() {
  this.filePath = "D:SamplePDF.pdf";
  document.loation.href = this.filePath;
}

const AboutMePage = () => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <div className="col-span-4">
        <h1 className="w-full col-span-12 text-4xl font-bold">
          <LightSpeed left cascade>
            Sobre mi
          </LightSpeed>
        </h1>
      </div>
      <Divider className="my-8" />
      <YoutubeEmbed className="h-screen col-span-12" embedId="cPfABz95g2M" />
      <div className="col-span-5">
        <Image width={800} height={1200} src="/images/aboutMe/me.png" />
      </div>
      <div className="col-span-7 px-2 py-6">
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
        <p className="mt-4 text-sm text-gray-600">
          Finalizando mi preparatoria, decidí tomar un semestre sabático,
          trabajando como diseñador en una empresa de impresión y tuve el placer
          de conocer más de esta rama y tome la decisión de continuar con mis
          estudios a nivel superior entrando a la licenciatura de diseño gráfico
          de la Universidad de Guadalajara.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          En el año 2018 ingreso a la universidad con 19 años de edad, y
          comienzo a adentrarme al mundo del diseño, las artes gráficas y todo
          aquello con lo que ya me había familiarizado a lo largo de mi vida,
          comencé a entender el diseño como un trabajo formal, y cambio mi
          perspectiva sobre el mismo, me enamoré del diseño gráfico y todo lo
          que lo rodea.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Me gustaría poder hacer un cambio en el mundo, y dar a la sociedad
          algo más que solo publicidad, se que el mundo necesita del diseño,
          pero es bueno enseñar diseño de la manera correcta.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Soy un apasionado del diseño y construcción de marcas, además del
          diseño editorial enfocado a libros infantiles, he trabajado con
          distintas empresas que necesitan un diseño de logotipo de la mano de
          la empresa en la que colaboro actualmente.
        </p>
      </div>
      <div className="col-span-7 col-start-6 my-12">
        <h2 className="text-red-600">Experiencia</h2>
        <ul className="pl-4">
          <li className="mt-2 text-sm italic text-gray-600">
            Carrera técnica en diseño gráfico digital en la preparatoria CECYTEJ
            (3 Años)
          </li>
          <li className="mt-2 text-sm italic text-gray-600">
            Trabajo como diseñador en Copiroyal printcenter (2017 - 2018)
          </li>
          <li className="mt-2 text-sm italic text-gray-600">
            Trabajo como freelance (2018 - 2019)
          </li>
          <li className="mt-2 text-sm italic text-gray-600">
            Profesor en escuela de diplomados VANGUARDA ACADÉMICA (2019 - 2020)
          </li>
          <li className="mt-2 text-sm italic text-gray-600">
            Ingreso a la licenciatura de diseño gráfico en el CUAAD (2018 -
            Actualidad)
          </li>
          <li className="mt-2 text-sm italic text-gray-600">
            Diseñador en Doctor Gráfico (2020 - Actualidad)
          </li>
        </ul>
      </div>
      <div className="col-span-5">
        <Image width={685} height={512} src="/images/aboutMe/interest.png" />
        <p className="mt-3 text-sm italic text-left text-gray-600">
          Foto de presentación para el proyecto de diseño de sistemas de
          identidad para el Museo interpretativo del Paisaje Agavero del Arenal.{" "}
        </p>
      </div>
      <div className="col-span-7 px-2 py-2">
        <h2 className="w-full text-left text-red-600">Intereses</h2>
        <p className="mt-4 text-sm text-left text-gray-600">
          Me apasiono por el mundo de las marcas, sin embargo me gusta
          relacionarme con las demás áreas del diseño, me considero muy bueno en
          el diseño de marca e identidad, al igual que siento un tremendo
          respeto por el diseño editorial, me encanta el diseño de libros para
          niños, como lo son los libros álbum, o interactivos, algo que me
          diferencia de otros diseñadores, es mi manera de percibir el diseño y
          de trabajar, creo que la educación en esta área, es importante para
          poder comunicar de manera correcta, no me gusta alardear ni mentir a
          los clientes con historias en el diseño, prefiero ser conciso, pensar
          en la funcionalidad del diseño y el cómo impacta con los demás.{" "}
        </p>
        <p className="mt-4 text-sm text-left text-gray-600">
          La creatividad no es algo que los diseñadores heredan, sino algo que
          obtienen con trabajo, desde que me levanto intento ser creativo, a lo
          que me refiero con esto, es que intento buscar relaciones de lo
          cotidiano para crear conexiones en los pequeños detalles de la vida
          diaria. Soy honesto con mis clientes para tener siempre su confianza y
          creo que el diseño va más allá de lo que algunos pueden pensar, una de
          mis metas es poder cambiar el pensamiento de las personas que acudan a
          mí, educando a los demás sobre el diseño y seguir aportando a mi
          disciplina para que no se estanque.
        </p>
        <p className="w-8/12 mt-2 text-base italic font-bold text-black">
          "La gráfica <font className="text-red-600">popular mexicana</font> es
          algo que me encanta mirar, encuentro encantador el diseño mexicano"
        </p>
      </div>
      <Divider className="my-10" />
      <div className="col-span-12 py-6">
        <h2 className="flex flex-row w-full text-left">
          <LightSpeed right cascade>
            Los que <font className="text-red-600">me inspiran</font>
          </LightSpeed>
        </h2>
      </div>
      <Carrousel itemsToShow={3} />
      <Divider className="my-10" />
      <div className="col-span-7 col-start-6 my-12">
        <h2 className="text-red-600">Experiencia</h2>
        <p className="mt-4 text-sm text-left text-gray-600">
          Creo firmemente que el diseño como medio de comunicación real, es
          factible, el diseño es capaz de incitar movimientos, de hablar con los
          demás y de ayudar a la sociedad.
        </p>
        <p className="mt-4 text-sm text-left text-gray-600">
          Mi mayor meta es poder dejar algo en esta vida por lo cual ser
          recordado, ya sea innovando, enseñando o experimentando el diseño
          gráfico, creo que todos debemos tener un porque de hacer las cosas, no
          solo desperdiciar nuestros talentos sino innovar y ver más allá de lo
          que ya se ha hecho, el mundo esta en un cambio constante por lo que
          intentar hacer algo es una prioridad más que una opción.
        </p>
        <p className="mt-4 text-sm text-left text-gray-600">
          Quisiera poder convertir lo ordinario en extraordinario hacer un
          cambio de prioridades, ofrecer soluciones reales a los problemas
          reales que hay en el mundo, la comunicación es parte de este
          crecimiento, el poder ayudar me mueve.
        </p>
        <p className="mt-4 text-sm text-left text-gray-600">
          Me encantaría poder ayudar al mundo que me rodea con el diseño,
          mejorando todo lo que sea posible mejorar, hay muchos malos ejemplos
          de diseño aplicados en el día a día como ejemplo la señaletica de las
          calles, o los mapas confusos de la línea de tren, o incluso algunos
          letreros que nos dan indicaciones, por eso creo que hacer el trabajo
          de manera profesional y claramente con el conocimiento en las áreas
          que nos competen.
        </p>
        <p className="w-8/12 my-8 text-base italic font-bold text-black">
          "Me <font className="text-red-600">apasiono</font> por lo que hago por
          eso <font className="text-red-600">siempre</font> intento hacerlo
          bien"
        </p>
        <p className="w-10/12 my-8 text-base italic font-bold text-black">
          "En este mundo existen{" "}
          <font className="text-red-600">dos tipos de personas</font>, los que
          arriesgan todo para cumplir sus sueños y los que ven a los otros
          triunfar"
        </p>
      </div>
      <Divider className="my-4" />
      <div className="col-span-5 pt-10">
        <Image
          layout="responsive"
          width={685}
          height={574}
          src="/images/aboutMe/me-guitar.png"
        />
      </div>
      <div className="col-span-7 px-2 py-6">
        <h2 className="w-full text-left">
          Mis <font className="text-red-600">pasatiempos</font>
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
          Algo que me gusta de cada un de estos pasatiempos es su acercamiento
          con el diseño gráfico, en el caso de la música, siempre tuve un gusto
          bastante arraigado por ella, tome un taller de música experimental que
          ofrecía la UDG cuando solo tenia 14 años, actualmente uno de mis
          círculos sociales, es de músicos, solemos discutir sobre ¿qué canción
          es mejor? y ¿por qué?, escuchar canciones y al igual de que discutimos
          sobre algunas portadas, lo cual lo convierte en algo cercano a mi
          trabajo.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Por la parte del cine, siempre tuve gusto por este arte, me encanta
          ver películas, analizar los planos, los colores, los códigos gráficos
          que usan para comunicar un centenar de cosas, me encanta ver los
          planos vaqueros en las películas western, la ambientación y los
          atuendos, además me encantan los carteles de cine, ver esos carteles
          que me dicen de qué va la película, en dónde se ambienta, cuál es el
          título, cómo decidieron poner el nombre de las personas que
          colaboraron en dicho cartel, el logotipo de la empresa que está
          haciendo la película, la fotografía, entre otras cosas.
        </p>
        <Fade cascade bottom collapse when={isCollapsed}>
          <div>
            <p className="mt-4 text-sm text-gray-600">
              Los videojuegos son una manera de desestresarme y pasar el tiempo,
              me encantan los videojuegos de mundo abierto, donde puedo ir por
              el mapa, viendo cada detalle de este mismo, el diseño de los
              personajes, la historia y entre otras cosas, me hace sentir que
              puedo hacer lo que quiera, es una manera de transportarme a otro
              mundo.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Me gusta ir a las tiendas de discos, a mirar las portadas,
              detenerme a observarlas un rato me da una idea del tipo de música
              que es, lo que el cantante o la banda intentan decir, cuál es la
              tipografía que usan, cómo la usan, etcétera. Otro dato curioso
              relacionado a esto, es que en la materia de diseño de identidad,
              creamos la identidad de un grupo en base a la portada de alguno de
              sus discos, sin lugar a dudas fue un proyecto que me encantó
              realizar, muy divertido, ya que escuchaba las canciones de la
              banda todo el tiempo, para poder entender más el mensaje, la
              música y lo que querían decir.
            </p>
          </div>
        </Fade>
        <div className="col-span-7 col-start-6"></div>
        <div onClick={() => setIsCollapsed(!isCollapsed)}>
          <a className="flex flex-row items-center w-full col-span-12 my-6 text-center text-red-600 cursor-pointer hover:text-red-800">
            {isCollapsed ? "Ocultar" : "Ver más"}{" "}
            {isCollapsed ? (
              <AiOutlineUp className="pt-0.5 ml-2 text-red-600 hover:text-red-800" />
            ) : (
              <AiOutlineDown className="pt-0.5 ml-2 text-red-600 hover:text-red-800" />
            )}
          </a>
        </div>
      </div>
      <Divider className="my-16" />
      <div className="col-span-5">
        <Image
          layout="responsive"
          width={686}
          height={1060}
          src="/images/aboutMe/ftf.png"
        />
      </div>
      <div className="col-span-7 px-2">
        <h2 className="w-full text-left text-red-600">Últimamente</h2>
        <p className="mt-4 text-sm text-gray-600">
          Mi nombre es Erick Daniel Aranda Palomera, diseñador gráfico. Desde
          pequeño me consideré amante de la música, el arte, y sin saberlo, del
          diseño. Conocí el diseño gráfico cuando entre a la preparatoria y se
          nos dio a elegir entre 4 carreras técnicas, por lo que escogí diseño
          gráfico sin saber a ciencia cierta de que se trataba, poco a poco
          encontré una pasión por esta carrera y todo lo relacionado a ella.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          El mundo del diseño de contenido Social Media, lo tomo directamente
          del trabajo en el que me encuentro. Soy diseñador gráfico en un
          pequeño estudio de impresión y diseño, siendo el encargado del área de
          diseño en la sucursal Independencia en Doctor gráfico y queriendo
          desarrollarme en dicha área (Diseño de contenido Social media), he
          estudiado sobre el tema, para tener los resultados deseados, desde los
          tamaños para web correctos, la cantidad de texto que te dejan usar en
          ciertas publicaciones pagadas para redes sociales como Facebook e
          Instagram, hasta las horas de publicación más concurridas y un poco de
          marketing diría yo. Me apasiona el mundo del diseño de campaña para
          redes sociales tanto como el branding y la marca
        </p>
        <h2 className="w-full mt-4 text-left text-black">Diseño Social</h2>
        <p className="mt-4 text-sm text-gray-600">
          Hace poco tuve la oportunidad de conocer y leer lo que era el diseño
          social y el llamado manifiesto conocido como el "First thing First"
          dicho manifiesto, me hizo entrar en razón sobre a donde debería dar
          prioridades en mi trabajo como diseñador, a dónde hay que caminar como
          comunicadores gráficos y aportar a la sociedad con nuestras
          habilidades.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          El First Thing First, fue escrito en 1964 por Ken Garland, y publicado
          en el diario de "the guardian", y aunque no he logrado aún encontrar
          una manera de tomar prioridad el diseño social estoy trabajando en
          ello, hace poco tuve la oportunidad de elaborar un pequeño fanzine
          para mi clase de gestión del diseño, con un manifiesto renovado de la
          versión de Garland, junto a otros compañeros diseñadores. El
          manifiesto en cuestión recoge lo más importante que pone Garland en la
          mesa y es trasladado a la época en la que nos encontramos si te
          interesa leer el manifiesto de forma gratuita puedes dar click en el
          enlace.
        </p>
        <a
          href="/documents/Fanzine.pdf"
          download="Fanzine.pdf"
          className="flex flex-row items-center w-full col-span-12 my-6 text-center text-red-600 cursor-pointer hover:text-red-800"
        >
          Descargar fanzine
        </a>
      </div>
      <Divider className="mt-48 mb-4" />
      <Footer extended animationConfig={{ cascade: true, top: true }} />
    </div>
  );
};

export default AboutMePage;

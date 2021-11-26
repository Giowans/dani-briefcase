import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import Divider from "../../src/components/Divider/Divider";
import Bounce from "react-reveal/Bounce";
import { inspirers } from "../../src/staticData/inspirers";
import { anotherInspirers } from "../../src/staticData/anotherInspirers";
import InspirerItem from "../../src/components/InspirerItem";
import Image from "next/image";
import Link from "next/link";
import Carrousel from "../../src/components/Carrousel/Carrousel";
import Footer from "../../src/components/Footer";

export const getStaticPaths = async () => {
  const paths = inspirers.map((inspirer) => {
    return {
      params: { id: inspirer.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const inspirer = inspirers.find((item) => item.id == id);

  return {
    props: { data: inspirer },
  };
};

const InspirersPage = ({ data, ...props }) => {
  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <div className="col-span-4">
        <h1 className="flex flex-row w-full col-span-12 my-10 text-4xl font-bold">
          <Fade left cascade>
            Los que <font className="text-red-600">me inspiran</font>
          </Fade>
        </h1>
        <p className="w-full mt-4 mb-12 text-sm text-gray-600">
          Creo fielmente que detrás de cada buen diseñador se encuentra un
          referente que lo motiva a mejorar. Te presento a los míos:
        </p>
      </div>
      <Divider className="my-6" />
      <div className="grid w-full h-full grid-cols-12 col-span-12 gap-4 mb-20 bg-gray-200 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12">
        <Rotate left>
          <div className={"col-span-6 h-full " + data.color}>
            <Image layout="fill" src={data.path} />
          </div>
        </Rotate>
        <Rotate right cascade>
          <div className="col-span-6 px-4 py-4 h-96">
            <h4 className="w-full mt-2 text-xl font-bold text-red-600">
              {data.title || "Sin titulo"}
            </h4>
            <p className="w-full my-4 text-sm text-gray-600 whitespace-pre-line">
              {data.description || "Sin descripción"}
            </p>
          </div>
        </Rotate>
      </div>
      <h1 className="flex flex-row w-full col-span-12 mt-10 mb-2 text-4xl font-bold">
        <Fade right cascade>
          Algunas de sus <font className="text-red-600">obras</font>
        </Fade>
      </h1>
      <div className="grid grid-cols-12 col-span-12 gap-4">
        {data.works.map((item, index) => {
          const { title, path } = item;
          return (
            <Fade>
              <div className="h-64 col-span-4 mt-3" key={title + path}>
                <div className="flex flex-col items-center justify-center w-full h-full transition duration-500 ease-in-out transform cursor-default hover:-translate-y-1 hover:scale-110">
                  <Image width={1300} height={1000} src={path} alt={title} />
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
      <div className="col-span-4">
        <h2 className="flex flex-row w-full col-span-12 my-10 text-4xl font-bold">
          <Fade cascade>Recomendaciones</Fade>
        </h2>
        <p className="w-full mt-4 mb-16 text-sm text-gray-600">
          {data.recomendation}
        </p>
      </div>
      <Divider className="my-2" />
      <Carrousel itemsToShow={3} items={inspirers} />
      <Divider className="my-2" />
      <h2 className="flex flex-row w-full col-span-12 my-10 text-4xl font-bold text-black">
        <Fade right cascade>
          Otras referencias para{" "}
          <font className="text-red-600">inspirarme</font>
        </Fade>
      </h2>
      {anotherInspirers.map((item, index) => {
        return <InspirerItem item={item} className="col-span-4 mt-3 h-96" />;
      })}
      <Link href="/aboutMe" as="/sobre-mi">
        <a className="w-full col-span-12 my-20 text-center text-red-600 hover:text-red-800">
          Sigue conociendome
        </a>
      </Link>
      <Divider className="mt-20 mb-0" />

      <Footer
        extended={false}
        animationConfig={{ left: true, cascade: true }}
      />
    </div>
  );
};

export default InspirersPage;

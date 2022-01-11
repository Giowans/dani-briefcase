import Rotate from "react-reveal/Rotate";
import Divider from "../../src/components/Divider/Divider";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { inspirers } from "../../src/staticData/inspirers";
import { briefcases } from "../../src/staticData/briefcases";
import InspirerItem from "../../src/components/InspirerItem";
import Image from "next/image";
import Link from "next/link";
import Carrousel from "../../src/components/Carrousel/Carrousel";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const paths = briefcases.map((briefcase) => {
    return {
      params: { id: briefcase.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const briefcase = briefcases.find((item) => item.id == id);

  return {
    props: { data: briefcase },
  };
};

const BriefcaseDetailPage = ({ data, ...props }) => {
  const router = useRouter();

  const [prevNext, setPrevNext] = useState({
    previous: {
      id: 0,
      path: "/images/briefcase/1.png",
    },
    next: {
      id: 0,
      path: "/images/briefcase/1.png",
    },
  });

  useEffect(() => {
    const getingPrevNext = () => {
      const prev =
        briefcases.find((item) => item.id == data.id - 1) ||
        briefcases[briefcases.length - 1];
      const next =
        briefcases.find((item) => item.id == data.id + 1) || briefcases[0];

      console.log(prev, next);
      setPrevNext({
        previous: prev,
        next: next,
      });
    };

    getingPrevNext();
  }, [data.id]);

  return (
    <div className="grid w-full h-full grid-cols-12 gap-x-4 gap-y-1 lg:py-11">
      <div className="col-span-12 lg:col-span-4">
        <h1 className="flex flex-row w-full col-span-12 my-6 text-3xl font-bold lg:text-4xl">
          <Fade left cascade>
            {data.title}
          </Fade>
        </h1>
        <Fade cascade left>
          <p className="w-full mt-4 text-sm italic text-gray-600">
            {data.detail}
          </p>
          <p className="w-full mt-2 text-sm italic text-gray-600">
            {data.year}
          </p>
          <p className="w-full mt-2 text-sm italic text-gray-600">
            {data.type}
          </p>
        </Fade>
      </div>
      <Divider className="mt-2 mb-4" />
      <div className="col-span-12">
        <Carrousel
          imageStyles="lg:h-screen"
          className="hidden lg:h-screen lg:max-h-screen lg:inline-grid"
          items={data.carrousel}
          itemsToShow={1}
        />
        <Carrousel
          imageStyles="h-fit"
          className="h-64 lg:hidden"
          itemsToShow={1}
          items={data.carrousel}
        />
      </div>
      <div className="col-span-12 mt-16 lg:col-span-4 h-96">
        <Fade cascade>
          <div className="flex flex-col items-center p2">
            <h2 className="w-full text-red-600 text-start">Historia</h2>
            <p className="w-full pr-1 mt-4 mb-12 text-sm text-gray-600 whitespace-pre-line">
              {data.history.description}
            </p>
          </div>
        </Fade>
      </div>
      <div className="col-span-12 mt-16 lg:col-span-4 md:col-span-6 h-96">
        <Fade cascade>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Image
              width={544}
              height={544}
              src={data.history.images[0].path}
              alt={data.history.images[0].title}
            />
            <p className="mt-4 text-sm italic text-gray-600">
              {data.history.images[0].title}
            </p>
          </div>
        </Fade>
      </div>
      <div className="col-span-12 mt-16 lg:col-span-4 md:col-span-6 h-96">
        <Fade cascade>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Image
              width={544}
              height={544}
              src={data.history.images[1].path}
              alt={data.history.images[1].title}
            />
            <p className="mt-4 text-sm italic text-gray-600">
              {data.history.images[1].title}
            </p>
          </div>
        </Fade>
      </div>
      <div className="col-span-12 mt-12">
        <Fade>
          <Image
            width={1672}
            height={1113}
            className="w-full h-full"
            src={data.applications[0].path}
          />
        </Fade>
        <p className="mt-4 text-sm italic text-gray-600">
          {data.applications[0].title}
        </p>
      </div>
      <div className="col-span-12 my-12 lg:col-span-6 lg:col-start-7 h-96">
        <Fade cascade>
          <div className="flex flex-col items-center p2">
            <h2 className="w-full text-red-600 text-start">Problema</h2>
            <p className="w-full pr-1 mt-4 mb-12 text-sm text-gray-600 whitespace-pre-line">
              {data.problem}
            </p>
          </div>
        </Fade>
      </div>
      <div className="col-span-12">
        <Fade>
          <Image
            width={1672}
            height={1113}
            className="w-full h-full"
            src={data.applications[1].path}
          />
        </Fade>
        <p className="mt-4 text-sm italic text-gray-600">
          {data.applications[1].title}
        </p>
      </div>
      <div className="col-span-12 mt-12 lg:col-span-8">
        <Fade>
          <Image
            width={1108}
            height={544}
            className="w-full h-full"
            src={data.applications[2].path}
          />
        </Fade>
        <p className="mt-4 text-sm italic text-gray-600">
          {data.applications[2].title}
        </p>
      </div>
      <div className="col-span-12 my-12 lg:col-span-4 h-96">
        <Fade cascade>
          <div className="flex flex-col items-center p2">
            <h2 className="w-full text-start">
              Mi <font className="text-red-600">rol</font>
            </h2>
            <p className="w-full mt-4 mb-12 text-sm text-gray-600 whitespace-pre-line">
              {data.role}
            </p>
          </div>
        </Fade>
      </div>
      <div className="col-span-12 mt-8">
        <Fade>
          <Image
            width={1672}
            height={770}
            className="w-full h-full"
            src={data.applications[3].path}
          />
        </Fade>
        <p className="mt-4 text-sm italic text-gray-600">
          {data.applications[3].title}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center col-span-12 px-8 py-4 mt-10 bg-gray-200 md:px-8 md:py-4 lg:px-56 lg:py-16">
        <h2 className="w-full text-start">
          Aprendizaje obtenido en el proyecto
        </h2>
        <p className="w-full mt-6 mb-12 text-sm text-gray-600 whitespace-pre-line">
          {data.learning}
        </p>
      </div>
      <div class="col-span-12 grid grid-flow-col grid-cols-12 grid-rows-2 gap-4">
        {data.gallery.map((app, index) => {
          return (
            <Fade>
              <div
                className={`col-span-4 row-span-${app.size} mt-8 cursor-pointer`}
                key={app.title + app.path}
              >
                <div className="flex flex-col items-center justify-center w-full h-full transition duration-500 ease-in-out transform cursor-default hover:-translate-y-1 hover:scale-110">
                  <Image
                    priority
                    width={544}
                    height={544 * app.size}
                    src={app.path}
                    alt={app.title}
                  />
                </div>
                <p className="mt-2 text-xs italic text-gray-600 md:text-sm">
                  {app.title}
                </p>
              </div>
            </Fade>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center col-span-12 my-20 md:my-16">
        <h2 className="w-full text-2xl text-center">
          Seguir mirando proyectos
        </h2>
        <Link href="/briefcase" as="/portafolio">
          <a className="w-full col-span-12 mt-2 text-center text-red-600 hover:text-red-800">
            Volver a portafolio
          </a>
        </Link>
      </div>
      {prevNext.previous && prevNext.previous.id && (
        <div className="flex flex-col items-center justify-center w-full h-full col-span-12 transition duration-500 ease-in-out transform cursor-default cursor-pointer md:col-span-6 lg:col-start-1 hover:-translate-y-1 hover:scale-110">
          <div className="hidden md:block">
            <Fade left>
              <div className="">
                <Link href={"/briefcase/" + prevNext.previous.id}>
                  <Image
                    width={830}
                    height={400}
                    src={prevNext.previous.path}
                    alt={prevNext.previous.path}
                  />
                </Link>
              </div>
            </Fade>
          </div>
          <div className="block md:hidden">
            <Fade top>
              <div className="">
                <Link href={"/briefcase/" + prevNext.previous.id}>
                  <Image
                    width={830}
                    height={400}
                    src={prevNext.previous.path}
                    alt={prevNext.previous.path}
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      )}
      {prevNext.next && prevNext.next.id && (
        <div className="flex flex-col items-center justify-center w-full h-full col-span-12 transition duration-500 ease-in-out transform cursor-default cursor-pointer md:col-span-6 lg:col-start-7 hover:-translate-y-1 hover:scale-110">
          <div className="hidden md:block">
            <Fade right>
              <div className="">
                <Link href={"/briefcase/" + prevNext.next.id}>
                  <Image
                    width={830}
                    height={400}
                    src={prevNext.next.path}
                    alt={prevNext.next.path}
                  />
                </Link>
              </div>
            </Fade>
          </div>
          <div className="block md:hidden">
            <Fade bottom>
              <div className="">
                <Link href={"/briefcase/" + prevNext.next.id}>
                  <Image
                    width={830}
                    height={400}
                    src={prevNext.next.path}
                    alt={prevNext.next.path}
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      )}
      <Footer
        className="mt-48"
        animationConfig={{ cascade: true }}
        extended={false}
      />
    </div>
  );
};

export default BriefcaseDetailPage;

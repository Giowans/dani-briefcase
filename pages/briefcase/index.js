import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import BriefcaseItem from "../../src/components/BriefcaseItem";
import Divider from "../../src/components/Divider/Divider";
import Tabs from "../../src/components/Tabs";
import Footer from "../../src/components/Footer";
import { useRouter } from "next/router";
import {
  briefcases,
  creativeProcess,
  talents,
} from "../../src/staticData/briefcases";
const BriefcasePage = () => {
  const router = useRouter();
  const [imageData, setImageData] = useState(briefcases);

  const onSelectedTab = (newValue) => {
    if (newValue === "Todos") {
      setImageData(briefcases);
      return;
    }

    setImageData(briefcases.filter((item) => item.type === newValue));
  };

  return (
    <div className="grid w-full h-full grid-cols-12 gap-x-4 gap-y-1 lg:py-11">
      <div className="col-span-12 lg:col-span-4">
        <h1 className="w-full col-span-12 my-10 text-4xl font-bold text-center md:text-left">
          <Zoom left cascade>
            Portafolio
          </Zoom>
        </h1>
        <p className="w-full mt-4 mb-16 text-sm text-center text-gray-600 md:text-left">
          Diseño para encontrar soluciones gráficas.
        </p>
      </div>
      <div className="flex justify-end col-span-12 lg:pt-8 lg:col-span-4 lg:col-start-9">
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
            onSelect={() => router.push("/briefcase/" + item.id)}
            className="h-40 col-span-6 mt-3 md:col-span-4 lg:h-80 "
            briefcaseData={item}
            key={item.title + item.year + index}
          />
        );
      })}

      <Divider className="mt-16 mb-8" />

      <div className="col-span-12 lg:col-span-5">
        <h1 className="w-full text-4xl font-bold text-center md:text-left">
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
              className="col-span-12 mt-3 md:col-span-6 lg:h-72 lg:col-span-4 h-fit"
              briefcaseData={item}
              key={item.title + item.path + index}
            />
          );
        })}
      </div>

      <Divider className="mt-16 mb-8" />

      <div className="col-span-12 lg:col-span-6">
        <h1 className="flex flex-col items-center justify-center w-full text-4xl font-bold lg:flex-row md:justify-start">
          <Zoom bottom cascade>
            Mi proceso <font className="text-red-600">creativo</font>
          </Zoom>
        </h1>
        <p className="w-full pr-2 mt-4 mb-8 text-sm text-gray-600 text-start">
          El uso de una metodología bien planeada nos da una mejor ejecución del
          trabajo, además de que nos ayuda a organizarnos y conocer la manera en
          que trabajamos.
        </p>
        <p className="w-full mt-4 mb-8 text-sm text-gray-600 lg:pr-20 text-start">
          A continuación te presento la metología que empleo en cada uno de mis
          proyectos para poder resolverlos de la manera correcta.
        </p>
      </div>

      <div className="grid grid-cols-12 col-span-12 gap-4">
        {creativeProcess.map((item, index) => {
          let opc = [
            { left: true, top: true, cascade: true },
            { right: true, top: true, cascade: true },
            { left: true, bottom: true, cascade: true },
          ];
          return (
            <>
              <div className="hidden w-full col-span-12 lg:block h-fit lg:col-span-6">
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
              </div>
              <div className="block w-full col-span-12 h-fit lg:col-span-6 lg:hidden">
                <Rotate {...opc[0]}>
                  <div className="w-full p-8 bg-gray-300 h-fit">
                    <div className="flex flex-row items-center justify-start w-full">
                      <h1 className="text-6xl font-bold text-red-600">
                        0{index + 1}
                      </h1>
                      <h2 className="w-3/6 ml-10 text-lg text-gray-700 lg:text-2xl text-start">
                        {item.title}
                      </h2>
                    </div>
                    <p className="w-full mt-12 text-sm text-gray-600 whitespace-pre-line h-fit lg:h-64 text-start">
                      {item.description}
                    </p>
                  </div>
                </Rotate>
              </div>
            </>
          );
        })}
      </div>

      <Divider className="mt-20 mb-0" />

      <Footer extended animationConfig={{ left: true, cascade: true }} />
    </div>
  );
};

export default BriefcasePage;

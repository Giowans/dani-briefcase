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
            onSelect={() => router.push("/briefcase/" + item.id)}
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

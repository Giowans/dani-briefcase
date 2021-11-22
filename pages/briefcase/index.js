import { useRouter } from "next/router";
import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Divider from "../../src/components/Divider/Divider";
import Tabs from "../../src/components/Tabs";

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

const BriefcasePage = () => {
  const router = useRouter();

  return (
    <div className="grid w-full h-full gap-x-4 gap-y-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <div className="col-span-4">
        <h1 className="w-full col-span-12 my-10 text-5xl font-bold">
          <Zoom left cascade>
            Portafolio
          </Zoom>
        </h1>
        <p className="w-full mt-4 text-sm text-gray-600">
          Diseño para encontrar soluciones gráficas.
        </p>
      </div>
      <div className="flex justify-end col-span-4 col-start-9 pt-8">
        <Tabs options={["Todos", "Escolar", "Trabajo"]} className="pl-3" />
      </div>
      <Divider className="mt-2" />
    </div>
  );
};

export default BriefcasePage;

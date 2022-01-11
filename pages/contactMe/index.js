import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

import Fade from "react-reveal/Fade";
import Divider from "../../src/components/Divider/Divider";

const ContactMePage = () => {
  const router = useRouter();
  return (
    <div className="grid w-full h-full grid-cols-12 gap-x-4 gap-y-1 lg:py-11">
      <div className="col-span-12 lg:col-span-4">
        <h1 className="w-full col-span-12 my-4 text-3xl font-bold text-center md:text-left lg:text-4xl">
          <Fade left cascade>
            Contacto
          </Fade>
        </h1>
        <p className="w-full mt-4 text-sm text-gray-600">
          Si te interesa colaborar conmigo aquí te dejo mis datos de contacto
          para que podamos tomar un café juntos.
        </p>
      </div>
      <Divider className="mt-3 mb-4" />
      <div className="grid grid-cols-10 col-span-10 col-start-2 mb-24">
        <h2 className="w-full col-span-10 text-2xl text-center text-red-600">
          Datos de contacto
        </h2>
        <div className="col-span-10 mt-6 lg:col-span-2">
          <Fade cascade>
            <div className="w-full lg:w-fit">
              <p className="w-full text-base text-center md:text-left">Email</p>
              <p className="w-full mt-4 text-sm text-center text-gray-600 md:text-left">
                daniaranda26@gmail.com
              </p>
            </div>
          </Fade>
        </div>
        <div className="col-span-10 mt-6 lg:col-span-3">
          <Fade cascade>
            <div className="w-full lg:w-fit">
              <p className="w-full text-base text-center md:text-left">
                Sígueme en redes sociales
              </p>
              <p className="flex flex-row items-center justify-center w-full mt-4 text-sm text-gray-600 md:justify-start">
                <FaFacebookF className="mr-4 text-sm text-gray-600" /> Daniel
                Aranda
              </p>
              <p className="flex flex-row items-center justify-center w-full mt-4 text-sm text-gray-600 md:justify-start">
                <BsInstagram className="mr-4 text-sm text-gray-600" /> Dani
                Aranda
              </p>
            </div>
          </Fade>
        </div>
        <div className="col-span-10 mt-6 lg:col-span-3">
          <Fade cascade>
            <div className="w-full lg:w-fit">
              <p className="w-full text-base text-center md:text-left">
                Horario de atención
              </p>
              <p className="w-full mt-4 text-sm text-center text-gray-600 md:text-left">
                Lunes a Viernes 10 am a 3 pm
              </p>
              <p className="w-full mt-2 text-sm text-center text-gray-600 md:text-left">
                Sábado 10 a 4 pm
              </p>
            </div>
          </Fade>
        </div>
        <div className="col-span-10 mt-6 lg:col-span-2">
          <Fade cascade>
            <div className="w-full lg:w-fit">
              <p className="w-full text-base text-center md:text-left">
                Número telefónico
              </p>
              <p className="flex flex-row items-center justify-center w-full mt-4 text-sm text-center text-gray-600 md:justify-start md:text-left">
                <BsWhatsapp className="mr-4 text-sm text-gray-600" /> +52 33
                2655 0350
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="col-span-12">
        <div className="flex flex-col items-center justify-between w-screen px-8 pt-12 pb-16 -mx-12 bg-red-600 lg:px-64 lg:-mx-32 md:flex-row">
          <div className="w-full lg:w-5/12">
            <h2 className="text-xl text-center text-white md:text-left">
              Cuestionario de proyecto
            </h2>
            <p className="w-full mt-2 text-sm text-center text-white md:text-left">
              ¿Quisieras contestar un pequeño cuestionario? Me ayudara a
              entender mejor tu proyecto y podremos entablar una mayor
              comunicación.
            </p>
          </div>
          <button
            onClick={() => router.push("/questionarie", "/cuestionario")}
            className="w-8/12 p-4 mt-10 text-white transition duration-500 ease-out transform bg-red-500 cursor-default cursor-pointer lg:mt-0 lg:w-4/12 hover:-translate-y-1 hover:scale-110 hover:bg-red-400"
          >
            Ir a cuestionario
          </button>
        </div>
        <div className="flex items-center justify-center w-screen p-8 -mx-12 bg-white lg:-mx-32">
          <p className="text-sm text-center text-white"></p>
        </div>
        <div className="flex items-center justify-center w-screen p-4 -mx-12 bg-black lg:-mx-32">
          <p className="text-sm text-center text-white">
            2021 © Todos los derechos reservados: Daniel Aranda
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;

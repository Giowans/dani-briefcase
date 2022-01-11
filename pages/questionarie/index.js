import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const QuestionariePage = () => {
  const [formIndex, setFormIndex] = useState(0);

  const router = useRouter();
  if (formIndex > 3) {
    return (
      <div className="inline-grid w-full grid-cols-12 mt-16 gap-y-8 gap-x-4 lg:pt-11">
        <h1 className="w-full col-span-12 text-2xl font-bold text-center text-red-600 lg:col-span-8 lg:text-5xl lg:col-start-3">
          <Fade cascade>Su mensaje ha sido enviado con éxito</Fade>
        </h1>
        <div className="flex flex-col items-center justify-center col-span-12 px-8 my-12 lg:col-span-6 lg:col-start-4">
          <Fade top cascade>
            <p className="flex items-center justify-center w-full my-2 text-base text-center text-gray-600">
              ¡Gracias!
            </p>
            <p className="flex items-center justify-center w-full text-base text-center text-gray-600">
              Me pondré en contacto contigo en poco tiempo.
            </p>
            <p className="flex items-center justify-center w-full text-base text-center text-gray-600">
              Por favor, sigue explorando, tenemos regalos para tí.
            </p>
          </Fade>
          <Link href="/">
            <a className="w-full col-span-12 my-12 text-center text-red-600 hover:text-red-800">
              Seguir mirando
            </a>
          </Link>
        </div>
        <div className="col-span-12">
          <div className="flex items-center justify-center w-screen p-4 -mx-12 bg-black lg:-mx-32">
            <p className="text-sm text-center text-white">
              2021 © Todos los derechos reservados: Daniel Aranda
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="inline-grid w-full grid-cols-12 gap-y-8 gap-x-4 lg:pt-11">
      <h1 className="w-full col-span-12 mt-8 text-2xl font-bold lg:text-5xl lg:mt-4">
        <Fade cascade>Cuéntame sobre tu negocio</Fade>
      </h1>
      <div className="grid grid-cols-12 col-span-12 bg-gray-200 rounded-lg shadow-2xl">
        <div className="grid grid-cols-8 col-span-12 gap-4 p-10 lg:col-span-8 lg:col-start-2 lg:p-0">
          {formIndex == 0 && (
            <Fade cascade>
              <h2 className="w-full col-span-8 mt-4 text-xl text-red-600">
                Datos de Contacto
              </h2>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">Nombre</p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-4">
                <p className="w-full my-2 text-base text-gray-600">Email</p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-4">
                <p className="w-full my-2 text-base text-gray-600">
                  Número de teléfono
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-3">
                <p className="w-full my-2 text-base text-gray-600">
                  Horario de atención
                </p>
                <select className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400">
                  <option value="opc1">Lunes a Viernes: 10 AM a 3 PM</option>
                  <option value="opc2">Sábado: 10 AM a 4 PM</option>
                </select>
              </div>
              <div className="col-span-8 lg:col-span-5">
                <p className="w-full my-2 text-base text-gray-600">Domicilio</p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
            </Fade>
          )}
          {formIndex == 1 && (
            <Fade cascade>
              <h2 className="w-full col-span-8 mt-4 text-red-600 lg:col-span-8">
                Sobre tu empresa
              </h2>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál es su nombre?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-4">
                <p className="w-full my-2 text-base text-gray-600">
                  Giro del negocio
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-4">
                <p className="w-full my-2 text-base text-gray-600">
                  Producto o servicio
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Cuentame más sobre tus productos
                </p>
                <textarea
                  rows={3}
                  className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400"
                />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Donde vendes tus productos?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Que hace único a tu producto / servicio ?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
            </Fade>
          )}
          {formIndex == 2 && (
            <Fade cascade>
              <h2 className="w-full col-span-8 mt-4 text-red-600 lg:col-span-8">
                Sobre el proyecto
              </h2>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál es la razón por la que te comunicas conmigo?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Qué esperas lograr con el desarrollo de tu proyecto?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Tiempo deseado del desarrollo del proyecto (duración)
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Hay algún mensaje en especifico que te gustaría transmitir
                  con forme a lo que haces?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál es el presupuesto que puedes destinar para este
                  proyecto?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  De los siguientes productos
                </p>
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál crees que encaja mejor con el proyecto a desarrollar?
                </p>
                <div className="flex flex-col items-start justify-start mt-2 lg:items-center lg:flex-row">
                  <div>
                    <input
                      className="ml-4"
                      type="radio"
                      id="age1"
                      name="age"
                      value="volantes"
                    />
                    <label className="ml-1" for="age1">
                      volantes
                    </label>
                  </div>
                  <div>
                    <input
                      className="ml-4"
                      type="radio"
                      id="age2"
                      name="age"
                      value="lona"
                    />
                    <label className="ml-1" for="age2">
                      lona
                    </label>
                  </div>
                  <div>
                    <input
                      className="ml-4"
                      type="radio"
                      id="age3"
                      name="age"
                      value="membrete"
                    />
                    <label className="ml-1" for="age3">
                      membrete
                    </label>
                  </div>
                  <div>
                    <input
                      className="ml-4"
                      type="radio"
                      id="age1"
                      name="age"
                      value="tarjetas"
                    />
                    <label className="ml-1" for="age1">
                      tarjetas
                    </label>
                  </div>
                  <div>
                    <input
                      className="ml-4"
                      type="radio"
                      id="age2"
                      name="age"
                      value="carpetas"
                    />
                    <label className="ml-1" for="age2">
                      carpetas
                    </label>
                  </div>
                  <div>
                    <input
                      className="ml-4"
                      type="radio"
                      id="age3"
                      name="age"
                      value="otros"
                    />
                    <label className="ml-1" for="age3">
                      otros
                    </label>
                  </div>
                </div>
              </div>
            </Fade>
          )}
          {formIndex == 3 && (
            <Fade cascade>
              <h2 className="w-full col-span-8 mt-4 text-red-600 lg:col-span-8">
                Target
              </h2>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Conoces a alguien que haga lo mismo que tu?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Menciona almenos 3 empresas o negocios que hagan lo que tu
                  haces
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿A qué tipo de personas te gustaría dirigirte (Jóvenes,
                  Adultos, Niños, Tercera edad?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Describe cómo seria tu cliente ideal
                </p>
                <textarea
                  rows={4}
                  className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400"
                />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Donde vendes tus productos?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8 lg:col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿De qué manera crees que tus clientes ven a tu empresa?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
            </Fade>
          )}
          <div className="flex flex-row items-center justify-end col-span-8 my-3 lg:col-span-4 lg:col-start-6">
            {formIndex > 0 && (
              <div
                onClick={() => setFormIndex(formIndex - 1)}
                className="self-start mr-6 text-red-600 hover:text-red-600"
              >
                <p className="flex flex-row items-center w-full col-span-12 my-6 text-center text-red-600 cursor-pointer hover:text-red-800">
                  <AiOutlineLeft
                    size="2rem"
                    className="pt-0.5 mr-2 text-red-600 hover:text-red-800"
                  />
                  Anterior
                </p>
              </div>
            )}
            <div
              onClick={() => setFormIndex(formIndex + 1)}
              className="text-red-600 hover:text-red-600"
            >
              <p className="flex flex-row items-center w-full col-span-12 my-6 text-center text-red-600 cursor-pointer hover:text-red-800">
                {formIndex == 3 ? "Enviar" : "Siguiente"}
                <AiOutlineRight
                  size="2rem"
                  className="pt-0.5 mr-2 text-red-600 hover:text-red-800"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full h-full col-span-12 bg-red-600 rounded-lg shadow-2xl lg:ml-6 lg:col-span-3">
          <h2 className="my-10 text-2xl text-white">Redes sociales</h2>
          <p className="w-full my-2 text-xl text-center text-white">
            Sigueme en mis redes
          </p>
          <div className="flex flex-col items-start self-center justify-between w-full px-10 mt-20 h-28 lg:h-2/6">
            <div className="flex flex-row items-center justify-start">
              <div class="rounded-full p-2 flex items-center justify-center mr-2 bg-white">
                <FaFacebookF size="0.85rem" className="text-red-600" />
              </div>
              <p className="flex flex-row items-center w-full text-xl text-white">
                Daniel Aranda
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div class="rounded-full p-2 flex items-center justify-center mr-2 bg-white">
                <BsInstagram size="0.85rem" className="text-red-600" />
              </div>
              <p className="flex flex-row items-center w-full text-xl text-white">
                daniaranda
              </p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div class="rounded-full p-2 flex items-center justify-center mr-2 bg-white">
                <BsWhatsapp size="0.85rem" className="text-red-600" />
              </div>
              <p className="flex flex-row items-center w-full text-xl text-white">
                +52 3326550350
              </p>
            </div>
          </div>
          <Link href="/contactMe" as="/contact">
            <p className="w-full my-16 text-sm italic text-center text-white cursor-pointer hover:text-gray-300">
              Ir a datos de contacto
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-screen p-4 mt-10 -mx-12 bg-black lg:-mx-32">
        <p className="text-sm text-center text-white">
          2021 © Todos los derechos reservados: Daniel Aranda
        </p>
      </div>
    </div>
  );
};

export default QuestionariePage;

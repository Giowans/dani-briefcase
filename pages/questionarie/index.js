import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

const QuestionariePage = () => {
  const [formIndex, setFormIndex] = useState(2);

  const router = useRouter();
  return (
    <div className="grid w-full gap-y-8 gap-x-4 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-12 lg:py-11">
      <h1 className="w-full col-span-12 text-5xl font-bold">
        <Fade cascade>Cuéntame sobre tu negocio</Fade>
      </h1>
      <div className="grid grid-cols-12 col-span-12 bg-gray-200 rounded-lg shadow-2xl">
        {formIndex == 0 && (
          <div className="grid grid-cols-8 col-span-8 col-start-2 gap-4">
            <Fade cascade>
              <h2 className="w-full col-span-8 my-4 text-2xl text-red-600">
                Datos de Contacto
              </h2>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">Nombre</p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-4">
                <p className="w-full my-2 text-base text-gray-600">Email</p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-4">
                <p className="w-full my-2 text-base text-gray-600">
                  Número de teléfono
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-3">
                <p className="w-full my-2 text-base text-gray-600">
                  Horario de atención
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-5">
                <p className="w-full my-2 text-base text-gray-600">Domicilio</p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
            </Fade>
          </div>
        )}
        {formIndex == 1 && (
          <div className="grid grid-cols-8 col-span-8 col-start-2">
            <Fade cascade>
              <h2 className="w-full col-span-8 my-4 text-2xl text-red-600">
                Sobre tu empresa
              </h2>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál es su nombre?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-4">
                <p className="w-full my-2 text-base text-gray-600">
                  Giro del negocio
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-4">
                <p className="w-full my-2 text-base text-gray-600">
                  Producto o servicio
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Cuentame más sobre tus productos
                </p>
                <textarea
                  rows={3}
                  className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400"
                />
              </div>
              <div className="col-span-5">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Donde vendes tus productos?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-5">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Que hace único a tu producto / servicio ?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
            </Fade>
          </div>
        )}
        {formIndex == 2 && (
          <div className="grid grid-cols-8 col-span-8 col-start-2">
            <Fade cascade>
              <h2 className="w-full col-span-8 my-4 text-2xl text-red-600">
                Sobre el proyecto
              </h2>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál es la razón por la que te comunicas conmigo?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Qué esperas lograr con el desarrollo de tu proyecto?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Tiempo deseado del desarrollo del proyecto (duración)
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Hay algún mensaje en especifico que te gustaría transmitir
                  con forme a lo que haces?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál es el presupuesto que puedes destinar para este
                  proyecto?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  De los siguientes productos
                </p>
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Cuál crees que encaja mejor con el proyecto a desarrollar?
                </p>
                <div className="flex flex-row items-center justify-center mt-2">
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
            </Fade>
          </div>
        )}
        {formIndex == 3 && (
          <div className="grid grid-cols-8 col-span-8 col-start-2">
            <Fade cascade>
              <h2 className="w-full col-span-8 my-4 text-2xl text-red-600">
                Target
              </h2>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Conoces a alguien que haga lo mismo que tu?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Menciona almenos 3 empresas o negocios que hagan lo que tu
                  haces
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿A qué tipo de personas te gustaría dirigirte (Jóvenes,
                  Adultos, Niños, Tercera edad?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-8">
                <p className="w-full my-2 text-base text-gray-600">
                  Describe cómo seria tu cliente ideal
                </p>
                <textarea
                  rows={4}
                  className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400"
                />
              </div>
              <div className="col-span-5">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿Donde vendes tus productos?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
              <div className="col-span-5">
                <p className="w-full my-2 text-base text-gray-600">
                  ¿De qué manera crees que tus clientes ven a tu empresa?
                </p>
                <input className="w-full px-2 py-3 text-black placeholder-gray-500 bg-gray-300 text-start focus:ring-4 ring-gray-400" />
              </div>
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionariePage;

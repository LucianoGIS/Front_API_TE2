"use client"
import React from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  name: string;
  codigo: string;
};
const GrupoDespesa = () => {

  const mockAPI = async () => {
    return new Promise<FormData>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Thiago Waldrich",
          codigo: "Developer",
        });
      }, 3000);
    });
  };

  const api = "http://localhost:8080/GrupoDespesa/create";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
      try {
          const resposta = await fetch(api, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
          });

          if (resposta.ok) {
              console.log("Dados enviados com sucesso",data);
          }
          else {
              console.error("Erro ao enviar dados");
          }
      } catch (error) {
          console.error("Erro ao enviar dados: ", error);
      }
  };
  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);
  return (
    <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Grupo Despesa
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome
            </label>
            <div className="mt-2.5">
              <input
                {...register("name", {
                  required: "Nome é requerido.",
                  minLength: {
                    value: 10,
                    message: "Nome precisa ter pelo menos 10 caracteres",
                  },
                })}
                type="text"
                name="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.name && (
                <span className="text-red-700">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="codigo"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Código
            </label>
            <div className="mt-2.5">
              <input
              {...register("codigo", {
                required: "Código é requerido.",
                minLength: {
                  value: 10,
                  message: "Código precisa ter pelo menos 10 caracteres",
                },
              })}
                type="text"
                name="codigo"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default GrupoDespesa
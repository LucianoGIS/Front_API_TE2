"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Navbar from "../components/Navbar/Navbar";

type FormData = {
    nome: string;
    objetivoEstrategico: string;
    grupoDespesa: string;
    modalidadeAplicacao: string;
    tipoTransacao: string;
    fonteRecurso: string;
    programa: string;
    acao: string;
    elementoDespesa: string;
    unidadeOrcamentaria: string;
    unidade: string;
};

export default function NovoLancamento() {


    const api = "http://localhost:8080/NovoLancamento";

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
        <div>
            <title>Lançamento</title>
            <div className="bg-white w-2/5 p-2 mx-auto my-auto mt-1 pt-5 rounded-md">
                <div className="text-center">
                    <h2 className="font-bold text-gray-900 sm:text-4xl">
                        Lançamento
                    </h2>
                </div>
                <form action={"../"}
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="nome"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Nome
                            </label>
                            <div className="mt-2.5">
                                <input
                                    {...register("nome", {
                                        required: "Nome é requerido.",
                                        minLength: {
                                            value: 10,
                                            message: "Nome precisa ter pelo menos 10 caracteres",
                                        },
                                    })}
                                    type="text"
                                    name="nome"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors?.nome && (
                                    <span className="text-red-700">{errors.nome.message}</span>
                                )}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="objetivoEstrategico"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Objetivo Estratégico
                            </label>
                            <div className="mt-2.5">
                            <select
                                {...register("objetivoEstrategico", {
                                    required: "Escolha uma opção.",
                                })}
                                name="objetivoEstrategico"
                                className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value=""> </option>
                                <option value="credito">Crédito</option>
                                <option value="debito">Débito</option>
                            </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="GrupoDespesa"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Grupo de despesa
                            </label>
                            <div className="mt-2.5">
                            <select
                                {...register("grupoDespesa", {
                                    required: "Escolha uma opção.",
                                })}
                                name="grupoDespesa"
                                className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value=""> </option>
                                <option value="credito">Crédito</option>
                                <option value="debito">Débito</option>
                            </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="modalidadeAplicacao"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Modalidade de Aplicação
                            </label>
                            <div className="mt-2.5">
                            <select
                                {...register("modalidadeAplicacao", {
                                    required: "Escolha uma opção.",
                                })}
                                name="modalidadeAplicacao"
                                className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value=""> </option>
                                <option value="credito">Crédito</option>
                                <option value="debito">Débito</option>
                            </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2 my-1">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">
                                Tipo de Transação
                            </label>
                            <select
                                {...register("tipoTransacao", {
                                    required: "Escolha uma opção.",
                                })}
                                name="tipoTransacao"
                                className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value=""> </option>
                                <option value="credito">Crédito</option>
                                <option value="debito">Débito</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="fonteRecurso"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Fonte do Recurso
                            </label>
                            <div className="mt-2.5">
                                <select
                                    {...register("fonteRecurso", {
                                        required: "Escolha uma opção.",
                                    })}
                                    name="fonteRecurso"
                                    className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value=""> </option>
                                    <option value="credito">Crédito</option>
                                    <option value="debito">Débito</option>
                                </select>

                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="programa"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Programa
                            </label>
                            <div className="mt-2.5">
                                <select
                                    {...register("programa", {
                                        required: "Escolha uma opção.",
                                    })}
                                    name="programa"
                                    className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value=""> </option>
                                    <option value="credito">Crédito</option>
                                    <option value="debito">Débito</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="acao"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Ação
                            </label>
                            <div className="mt-2.5">
                            <select
                                    {...register("acao", {
                                        required: "Escolha uma opção.",
                                    })}
                                    name="acao"
                                    className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value=""> </option>
                                    <option value="credito">Crédito</option>
                                    <option value="debito">Débito</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="elementoDespesa"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Elemento da despesa
                            </label>
                            <div className="mt-2.5">
                            <select
                                    {...register("elementoDespesa", {
                                        required: "Escolha uma opção.",
                                    })}
                                    name="elementoDespesa"
                                    className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value=""> </option>
                                    <option value="credito">Crédito</option>
                                    <option value="debito">Débito</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="unidadeOrcamentaria"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Unidade Orçamentária
                            </label>
                            <div className="mt-2.5">
                            <select
                                    {...register("unidadeOrcamentaria", {
                                        required: "Escolha uma opção.",
                                    })}
                                    name="unidadeOrcamentaria"
                                    className="block w-full rounded-md border-0 mt-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value=""> </option>
                                    <option value="credito">Crédito</option>
                                    <option value="debito">Débito</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="unidade"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Unidade
                            </label>
                            <div className="mt-2.5">
                                <input
                                    {...register("unidade", {
                                        required: "Unidade é requerida.",
                                    })}
                                    type="text"
                                    name="unidade"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        {/* <div className="sm:col-span-2">
                            <label
                                htmlFor="tipoTransicao"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Modalidade de Aplicação
                            </label>
                            <div className="mt-2.5">
                            <input
                                    {...register("tipoTransicao", {
                                        required: "Tipo de transicao é requerido.",
                                    })}
                                    type="text"
                                    name="tipoTransicao"
                                    autoComplete="given-email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
                        {/* <div className="sm:col-span-2">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Telefone
                            </label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        País
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option>BR</option>
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                                <input
                                 {...register("phoneNumber", {
                                    required: "Telefone é requerido.",
                                })}
                                    type="tel"
                                    name="phoneNumber"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
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
        </div>
    );
}
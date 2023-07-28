'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster } from 'react-hot-toast';

import { AiOutlineCloudDownload } from 'react-icons/ai';
import Link from 'next/link';
import { PlayerType, validationSchema } from '@/lib/playerSchema';
import { postPlayer } from '@/utils/postPlayer';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PlayerType>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <>
      <Toaster />
      <form
        className="px-8 pt-6 pb-4 mb-4 mt-6 border border-slate-400 rounded-md flex"
        onSubmit={handleSubmit(postPlayer)}
      >
        <div className="w-1/3 flex items-center justify-center">
          <AiOutlineCloudDownload className="text-7xl text-slate-400" />
        </div>
        <div className="w-2/3 flex flex-col gap-3 ">
          {/* firstname */}
          <div className="mb-4 md:mr-2 md:mb-0">
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.firstname && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="title"
              type="text"
              placeholder="Nom*"
              {...register('firstname')}
            />
            {errors.firstname && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.firstname?.message}
              </p>
            )}
          </div>
          {/* last name */}
          <div className="mb-4 md:mr-2 md:mb-0">
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.lastname && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="title"
              type="text"
              placeholder="Prenom*"
              {...register('lastname')}
            />
            {errors.lastname && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.lastname?.message}
              </p>
            )}
          </div>
          {/* salary */}
          <div className="mb-4 md:mr-2 md:mb-0">
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.salary && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="salary"
              placeholder="Salaire annuel"
              {...register('salary')}
            />
            {errors.salary && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.salary?.message}
              </p>
            )}
          </div>

          {/* goals */}
          <div className="mb-4 md:mr-2 md:mb-0">
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.goal && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              id="goal"
              placeholder="Numero de but"
              {...register('goal')}
            />
            {errors.goal && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.goal?.message}
              </p>
            )}
          </div>
          <div className="mb-6 text-center flex justify-between">
            <button
              disabled={isSubmitting}
              className="border px-2 py-1 border-slate-900 border-b-2 border-r-2 hover:bg-slate-100 flex items-center disabled:bg-slate-800"
              type="submit"
            >
              Sauvgarder
            </button>
            <Link
              className="border px-2 py-1 border-slate-900 border-b-2 border-r-2 hover:bg-slate-100 flex items-center"
              href="/"
            >
              Anuuler
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;

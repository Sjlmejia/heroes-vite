import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Heroe = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }
  if(!hero) {
    return <Navigate to="/marvel" />
  }
  const imageHeroe = `./heroes/${ id }.jpg`
  return (
    <article className=" h-96 flex align-middle justify-center overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src={imageHeroe}
        className="object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {hero.first_appearance}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            {hero.superhero}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {hero.characters}
        </p>
      <button 
        className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
        onClick={ onNavigateBack }
      >
        Regresar
      </button>
      </div>
    </article>
  )
}

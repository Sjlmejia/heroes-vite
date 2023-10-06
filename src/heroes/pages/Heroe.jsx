import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const Heroe = () => {

  const {id} = useParams();

  const hero =getHeroById(id);
  if(!hero) {
    return <Navigate to="/marvel" />
  }
  console.log(hero);
  const imageHeroe = `/assets/heroes/${ id }.jpg`
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
  </div>
</article>
  )
}

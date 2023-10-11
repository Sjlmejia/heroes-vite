// import { Card } from "../components/Card"
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm"
import { getHeroesByname } from "../helpers"
import { Card } from "../components"

export const Search = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse( location.search );

  const heroes = getHeroesByname(q);

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if( searchText.trim().length <=1 ) return;
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1 className="flex justify-center my-6 font-bold text-2xl">Search</h1>
      <hr />
      <div className="flex">
      <div className="p-5 flex-1">
        <h4>Searching</h4>
        <form className="py-4" onSubmit={ onSearchSubmit }>
          <input
            type="text"
            placeholder="Search a hero"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
          Search
        </button>
        </form>
      </div>
      <div className="p-5 flex-1">
        <h4>Results</h4>
        {
          q === ''
          ? <div className="p-4 bg-cyan-500 text-white">
              Search a hero
              </div>
            : (heroes.length === 0)
            && <div className="p-4 bg-red-500 text-white">
            No hero with <b>{ q }</b>
          </div>
        }

        {
          heroes.map( hero => (
            <Card key={hero.id} {...hero} />
          ))
        }
      </div>
      </div>
    </>
  )
}

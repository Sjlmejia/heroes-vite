import { getHeroesByPublisher } from "../helpers";
import PropTypes from 'prop-types'; 
import { Card } from "./Card";

export const HeroList = ({publisher}) => {
  
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="flex flex-wrap">
      {heroes.map((heroe, id) => {
        return <Card key={id} {...heroe}></Card>
      })}
    </div>

  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
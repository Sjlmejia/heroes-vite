import { getHeroesByPublisher } from "../helpers";
import PropTypes from 'prop-types'; 
import { Card } from "./Card";
import { useMemo } from "react";

export const HeroList = ({publisher}) => {
  
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="flex flex-wrap justify-center">
      {heroes.map((heroe, id) => {
        return <Card key={id} {...heroe}></Card>
      })}
    </div>

  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
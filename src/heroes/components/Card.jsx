import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({id,superhero, alter_ego, characters }) => {
  
  const imageHeroe = `/heroes/${ id }.jpg`
  return (
    <Link to={`/heroe/${id}`} className="block mr-4">
      <img
        alt="Art"
        src={imageHeroe}
        className="h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        {superhero}
      </h3>

      <p className="mt-2 max-w-sm text-gray-700">
        {alter_ego}
      </p>
      {
        ( alter_ego !== characters) && (
          <p className="mt-2 max-w-sm text-gray-700">
          {characters}
        </p>
        )
      }
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  alter_ego: PropTypes.string,
  characters: PropTypes.string,
}
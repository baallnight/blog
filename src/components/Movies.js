import Proptypes from "prop-types";
import {Link} from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}){
 return (
    <div>
    <img alt={title} src={coverImg}/>
    <h2>
      <Link to={`/detail/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
      {genres.map(g=>(
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
 )
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}

export default Movie;
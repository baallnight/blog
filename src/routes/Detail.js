import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movies";

function Detail() {

    const { id  } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [])

    console.log(id);

    return (
        <div>{loading ? <h1>loading...</h1> : 
        <Movie 
          key = {movie.id}
          id = {movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.description_intro}
          genres={movie.genres}
        />
        }</div>
    );

}

export default Detail;
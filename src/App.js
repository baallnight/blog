import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
 return <Router>
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/detail/:id" element={<Detail />}/>
   </Routes>
 </Router>;
}

export default App;

/*
 const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )).json();
  
    setMovies(json.data.movies);
    setLoading(false);
  }
 
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)
  return (
    <div>{loading ? <h1>Loading...</h1> : movies.map((item, index)=>(
      <Movie 
        key = {item.id}
        coverImg={item.medium_cover_image} 
        title={item.title} 
        summary={item.summary}
        genres={item.genres}
      />
      ))}</div>
  );
  */

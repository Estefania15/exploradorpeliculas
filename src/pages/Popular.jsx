import { useEffect, useState } from "react";
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import "../App.css";

const PRESETS = ["Avengers", "Batman", "Star Wars", "Harry Potter"];

export default function Popular() {
    const [cat, setCat] = useState(PRESETS[0]);
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
    (async () => { setMovies(await searchMovies(cat)); })(); 
}, [cat]);

return (
    <div className="container">
    <h2 style={{ margin: "6px 0 10px" }}>Populares</h2>
    <div className="chips">
        {PRESETS.map(p => (
        <button
            key={p}
            className={`chip ${p===cat ? "active":""}`}
            onClick={() => setCat(p)}
        >{p}</button>
        ))}
    </div>
    {movies.length===0 && <p className="center-muted">Cargando…</p>}
    <div className="movies-grid">
        {movies.map(m => <MovieCard key={m.imdbID} movie={m} />)}
    </div>
    </div>
    );
}

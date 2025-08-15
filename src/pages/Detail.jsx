import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetail } from "../services/movieService";
import "../App.css";

export default function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => { getMovieDetail(id).then(setMovie); }, [id]);
    if (!movie) return <div className="container">Cargando…</div>;
    
    const poster = movie.Poster && movie.Poster !== "N/A"
    ? movie.Poster.replace(/^http:/, "https:")
    : "https://via.placeholder.com/300x450?text=Sin+poster";

return (
    <div className="container">
        <Link to="/" className="back-link">← Volver</Link>
    <div className="detail-wrap" style={{ marginTop: 12 }}>
        <img src={poster} alt={movie.Title} />
        <div>
            <h1 className="detail-title">{movie.Title} ({movie.Year})</h1>
            <p className="detail-text">{movie.Plot}</p>
            <p className="detail-text"><b>Género:</b> {movie.Genre}</p>
            <p className="detail-text"><b>Director:</b> {movie.Director}</p>
            <p className="detail-text"><b>Actores:</b> {movie.Actors}</p>
        </div>
    </div>
    </div>
    );
}

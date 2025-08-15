import { Link } from "react-router-dom";
import "../App.css";

export default function MovieCard({ movie }) {
    const poster = movie.Poster && movie.Poster !== "N/A"
    ? movie.Poster.replace(/^http:/, "https:")
    : "https://via.placeholder.com/300x450?text=Sin+poster";

    return (
    <div className="movie-card">
        <img src={poster} alt={movie.Title} />
    <div className="card-body">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-meta">{movie.Year}</div>
        <Link className="card-link" to={`/detail/${movie.imdbID}`}>Ver detalle</Link>
    </div>
    </div>
    );
}

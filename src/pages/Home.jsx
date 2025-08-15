import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";
import "../App.css";

export default function Home() {
    const { movies, search } = useMovies();

return (
    <div className="container">
    <SearchBar />
    
    {movies.length === 0 ? (
        <div className="empty-state">
          {/* Ilustración (SVG) */}
        <svg viewBox="0 0 200 120" className="empty-illustration" aria-hidden="true">
            <rect x="20" y="25" width="160" height="70" rx="8" fill="#ffffff" opacity="0.8"/>
            <rect x="30" y="40" width="70" height="8" rx="4" fill="#c9dbfa"/>
            <rect x="30" y="55" width="120" height="6" rx="3" fill="#e1edff"/>
            <rect x="30" y="68" width="95" height="6" rx="3" fill="#e1edff"/>
            <circle cx="155" cy="60" r="16" fill="#4a90e2" opacity="0.2"/>
            <polygon points="150,52 162,60 150,68" fill="#4a90e2"/>
        </svg>
        </div>
    ) : (
        <div className="movies-grid">
        {movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
        ))}
        </div>
    )}
    </div>
);
}

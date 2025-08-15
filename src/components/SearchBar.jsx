import { useState } from "react";
import { useMovies } from "../context/MovieContext";
import "../App.css";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const { search, clear } = useMovies?.() || { clear: () => {} };

    const handleSubmit = (e) => { e.preventDefault(); search(query); };
    const handleClear = () => { setQuery(""); clear && clear(); };

return (
    <form onSubmit={handleSubmit} className="search-bar">
    <input
        className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar película…"
        onKeyDown={(e) => e.key === "Escape" && handleClear()}
    />
        <button className="btn" type="submit">Buscar</button>
        <button className="btn btn-outline" type="button" onClick={handleClear}>Limpiar</button>
    </form>
    );
}

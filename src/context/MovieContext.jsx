import { createContext, useContext, useState } from "react";
import { searchMovies } from "../services/movieService";

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);

    const search = async (query) => {
        if (!query) return;
        const results = await searchMovies(query);
        setMovies(results);
    };

    const clear = () => setMovies([]); // ⬅️ limpiar resultados

    return (
        <MovieContext.Provider value={{ movies, search, clear }}>
        {children}
        </MovieContext.Provider>
    );
    }

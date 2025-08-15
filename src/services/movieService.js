const API_KEY = import.meta.env.VITE_OMDB_API_KEY; 

export async function searchMovies(query) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
return data.Search || [];
}

export async function getMovieDetail(id) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=short`);
return await res.json();
}

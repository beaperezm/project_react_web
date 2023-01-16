
const getDataPaged = (page) => {
    return fetch(`https://proyecto-react-api.vercel.app/series/paged?page=${page}`)
        .then((res) => res.json())
        .then((res) => {
            const page = res.nextPage;
            const cleanData = res.movies.map((serie) => {
                return {
                    id: serie.id,
                    title: serie.title,
                    director: serie.director,
                    genre: serie.genre,
                    platform: serie.platform,
                    seasons: serie.seasons,
                    synopsis: serie.synopsis,
                    year: serie.year,
                    picture: serie.picture,
                    page: page
                }
            });
            return cleanData;
        });
};

export default getDataPaged;
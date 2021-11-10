const API_KEY = "0eaa6db7e6ac99943d7b4b24e95ec968";
const BASE_URL = "https://api.themoviedb.org/3";

export const moviesApi = {
  trending: ({ pageParam }) =>
    fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${
        pageParam ? pageParam : 1
      }`
    ).then((res) => res.json()),
  upcoming: ({ pageParam }) =>
    fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=${
        pageParam ? pageParam : 1
      }&region=KR`
    ).then((res) => res.json()),
  nowPlaying: () =>
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [_, query] = queryKey;
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${query}&page=1`
    ).then((res) => res.json());
  },
  detail: ({ queryKey }) => {
    const [_, id] = queryKey;
    return fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR&append_to_response=videos%2Cimages`
    ).then((res) => res.json());
  },
};

export const tvApi = {
  trending: ({ pageParam }) =>
    fetch(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&page=${
        pageParam ? pageParam : 1
      }`
    ).then((res) => res.json()),
  airing: ({ pageParam }) =>
    fetch(
      `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=ko-KR&page=${
        pageParam ? pageParam : 1
      }`
    ).then((res) => res.json()),
  topRated: ({ pageParam }) =>
    fetch(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ko-KR&page=${
        pageParam ? pageParam : 1
      }`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [_, query] = queryKey;
    return fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&language=ko-KR&query=${query}&page=1`
    ).then((res) => res.json());
  },
  detail: ({ queryKey }) => {
    const [_, id] = queryKey;
    return fetch(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko-KR&append_to_response=videos%2Cimages`
    ).then((res) => res.json());
  },
};

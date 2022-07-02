export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string; 
    popularity: number;
    poster_path: string;
    release_date: string; 
    title: string;
    video: boolean;
    vote_average: number; 
    vote_count: number;
    revenue: number;
    runtime: number;
    status: string;
    genres: Genre[];
}

export interface MovieVideos {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
}

export interface MovieImages {
    file_path: string;
    height: number;
    width: number;
} 

export interface Genre {
    id: number;
    name: string;
}

export interface MovieVideoDto {
    id: number;
    results: MovieVideos[]; 
}

export interface MovieDto {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}



export interface Photo {
    id: number;
    backdrops: MovieImages[];
}
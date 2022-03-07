import { TVMazeImage } from "./image";
import { TVMazeRating } from "./rating";

export interface TVMazeShow {
    averageRuntime: number;
    ended: string;
    genre: string[];
    id: number;
    image: TVMazeImage;
    language: string;
    name: string;
    premiered: string;
    rating: TVMazeRating;
    status: string;
    summary: string;
    updated: Date;
    url: string;
}
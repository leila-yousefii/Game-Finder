import useData from "./useData";
import { Genre } from "./useGenres";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGames = (selectedGenre: Genre | null, selectedPlatform:Platform|null, selectedSort:string,searchText:string) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id , platforms: selectedPlatform?.id,ordering:selectedSort,search: searchText} }, [
    selectedGenre?.id,selectedPlatform?.id,selectedSort,searchText
  ]);

export default useGames;

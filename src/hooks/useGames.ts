import { useQuery } from '@tanstack/react-query'
import  { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import { GameQuery } from "../App";
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}


const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.search,
          },
        })
        .then(res => res.data),
  });
// useData<Game>("/games", { params: { genres: selectedGenre?.id , platforms: selectedPlatform?.id,ordering:selectedSort,search: searchText} }, [
//   selectedGenre?.id,selectedPlatform?.id,selectedSort,searchText
// ]);

export default useGames;

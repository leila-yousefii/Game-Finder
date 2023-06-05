import {
  Grid,
  GridItem,
  Show,
  
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";


export interface GameQuery{
  genreId:number |undefined;
  platformId:number|undefined;
  sort:string;
  search:string;
}

function App() {
  // const [selectedGenre,setSelectedGenre]=useState<Genre |null>(null);
  // const [selectedPlatform,setSelectedPlatform]=useState<Platform |null>(null);
  // const [selectedSort,setSelectedSort]=useState(String);
  // const [searchText,setSearchText]=useState(String);

  const [gameQuery,setGameQuery]=useState<GameQuery>({}as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav " " main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={
          {
            base:'1fr',
            lg: '220px 1fr'
          }
        }
      >
        <GridItem area="nav">
          <NavBar onSearch={(search)=>setGameQuery({...gameQuery,search})}></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genreId:genre.id})}></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}   ></GameHeading>
          <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platformId:platform.id})}></PlatformSelector>
          <SortSelector selectedSort={gameQuery.sort} onSelectSortOrder={(sort)=>setGameQuery({...gameQuery,sort})}></SortSelector>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

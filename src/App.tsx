import {
  Grid,
  GridItem,
  Show,
  Text,
  
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";

function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre |null>(null);
  const [selectedPlatform,setSelectedPlatform]=useState<Platform |null>(null);
  const [selectedSort,setSelectedSort]=useState(String);

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
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}></PlatformSelector>
          <SortSelector selectedSort={selectedSort} onSelectSortOrder={(selectedSort)=>setSelectedSort(selectedSort)}></SortSelector>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} selectedSort={selectedSort}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

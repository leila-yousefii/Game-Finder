import {
  Grid,
  GridItem,
  Show,
  
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";



function App() {
 
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
          <GenreList ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading ></GameHeading>
          <PlatformSelector ></PlatformSelector>
          <SortSelector></SortSelector>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

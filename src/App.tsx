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

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav " " main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
          <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

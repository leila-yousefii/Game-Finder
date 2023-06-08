import { Grid, Show, GridItem } from '@chakra-ui/react'

import GameGrid from '../Components/GameGrid'
import GameHeading from '../Components/GameHeading'
import GenreList from '../Components/GenreList'
import PlatformSelector from '../Components/PlatformSelector'
import SortSelector from '../Components/SortSelector'

const HomePage = () => {
  return (
    <>
          <Grid
        templateAreas={{ base: `" main"`, lg: `"aside main"` }}
        templateColumns={
          {
            base:'1fr',
            lg: '220px 1fr'
          }
        }
      >
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
  )
}

export default HomePage
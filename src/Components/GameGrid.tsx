import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fetchedGamesCount=data?.pages.reduce((acc,page)=>acc+page.results.length,0)||0;
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={()=>fetchNextPage()} loader={<Spinner marginX={10}></Spinner>}>
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid></InfiniteScroll>
      {/* {hasNextPage&&<Button onClick={()=>fetchNextPage()} marginX={10} marginY={5}>{isFetchingNextPage?'loading...': 'load more'}</Button>} */}
    </>
  );
};

export default GameGrid;

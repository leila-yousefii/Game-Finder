import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} as="dl">
        <GridItem>
          <Heading>{game.name}</Heading>

          <ExpandableText>{game.description_raw}</ExpandableText>
          <DefinitionItem term="platforms">
            {game.parent_platforms?.map((p) => (
              <Text key={p.platform.id}>{p.platform.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term="Metascore">
            <CriticScore score={game.metacritic}></CriticScore>
          </DefinitionItem>
          <DefinitionItem term="Genres">
            {game.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term="Publishers">
            {game.publishers.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
    </div>
  );
};

export default GameDetailPage;

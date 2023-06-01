import { Game } from "../hooks/useGames";
import { Card, CardBody, Flex, HStack, Heading, Image, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width='100%' height={280}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Wrap justify='between'>
        <WrapItem><PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)
        }></PlatformIconList></WrapItem>
<WrapItem>
        <CriticScore score={game.metacritic}></CriticScore></WrapItem></Wrap>
      </CardBody>
    </Card>
  );
};

export default GameCard;

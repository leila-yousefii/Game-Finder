import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props{
  onSelectGenre:(genre:Genre)=>void;
}

const GenreList = ({onSelectGenre}:Props) => {
  const { data,isLoading, error } = useGenres();
  if (error) return null;
if(isLoading) return <Spinner></Spinner>

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button onClick={()=>onSelectGenre(genre)} variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
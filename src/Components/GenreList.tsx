import { Button, HStack, Heading, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props{
  onSelectGenre:(genre:Genre)=>void;
  selectedGenreId?:number;
}

const GenreList = ({onSelectGenre, selectedGenreId}:Props) => {
  const { data,isLoading, error } = useGenres();
  if (error) return null;
if(isLoading) return <Spinner></Spinner>

  return (<>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button fontWeight={genre.id===selectedGenreId?'bold':'normal'} onClick={()=>onSelectGenre(genre)} variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List></>
  );
};

export default GenreList;

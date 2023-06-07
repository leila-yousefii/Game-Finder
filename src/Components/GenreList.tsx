import { Button, HStack, Heading, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";
import useGameQueryStore from "../store";


const GenreList = () => {
  const { data,isLoading, error } = useGenres();
  const selectedGenreId=useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId=useGameQueryStore(s=>s.setGenreId)
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
            <Button fontWeight={genre.id===selectedGenreId?'bold':'normal'} onClick={()=>setSelectedGenreId(genre.id)} variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List></>
  );
};

export default GenreList;

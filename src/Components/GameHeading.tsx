import { Heading } from '@chakra-ui/react'

import { Platform } from '../hooks/usePlatforms';
import { Genre } from '../hooks/useGenres';

interface Props{
    selectedGenre:Genre| null;
    selectedPlatform:Platform |null;
    
  }

const GameHeading = ({selectedGenre, selectedPlatform}:Props) => {
    const heading=`${selectedPlatform?.name|| ''} ${selectedGenre?.name || ''} Games`
  return (
    <Heading as='h1' paddingX={10} paddingY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading
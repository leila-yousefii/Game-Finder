import { Heading, Text } from '@chakra-ui/react'

import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../Components/NavBar';

const ErrorPage = () => {

    const error=useRouteError();
  return (
<>
<NavBar></NavBar>
<Heading marginLeft={10}>Oops</Heading>
<Text marginLeft={10}>{isRouteErrorResponse(error)?'This page does not exist.': 'An unexpected error occured.'} </Text>
</>
    )
}

export default ErrorPage
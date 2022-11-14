import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <Box bg={"white"} w="30%" p={4}>
        <VStack spacing={4} width={"250px"}>
          <Text color={"black"}>Title: {movie.original_title}</Text>
          <Image
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="image"
          ></Image>
          <Text>Genero</Text>
        </VStack>
      </Box>
    </>
  );
};

export default MovieCard;

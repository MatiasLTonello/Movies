import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  return (
    <Box bg="white" mb="10px">
      <VStack>
        <Text color={"black"}>Title: {movie.original_title}</Text>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="image"
        ></Image>
      </VStack>
    </Box>
  );
};

export default MovieCard;

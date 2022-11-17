import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  return (
    <Box mb="10px">
      <VStack>
        <Image
          borderRadius="md"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt="image"
        />
        <Text color={"white"} textAlign="center">
          Title: {movie.original_title}
        </Text>
      </VStack>
    </Box>
  );
};

export default MovieCard;

import React from "react";
import MovieCard from "./MovieCard";
import { Stack, Box } from "@chakra-ui/react";

const Movies = ({ movies }) => {
  return (
    <Stack
      p={30}
      w="100%"
      display={"flex"}
      justifyContent="space-around"
      direction="row"
      flexWrap={"wrap"}
    >
      {movies && movies.map((movie) => <MovieCard movie={movie}></MovieCard>)}
    </Stack>
  );
};

export default Movies;

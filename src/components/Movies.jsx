import { Stack } from "@chakra-ui/react";
import React from "react";
import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <Stack
      w="100%"
      display={"flex"}
      justifyContent="space-between"
      direction="row"
      mt={10}
      flexWrap={"wrap"}
    >
      {movies &&
        movies.map((movie, key) => (
          <Stack p={4} index={key} w={"30%"}>
            <MovieCard movie={movie}></MovieCard>
          </Stack>
        ))}
    </Stack>
  );
};

export default Movies;

import { Input, Stack } from "@chakra-ui/react";

const Searcher = ({ setMovies, movies }) => {
  const handleSearchMovie = async (e) => {
    if (e === "") {
      setMovies(movies);
    } else {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=09bee030802fd59cad9b544486b47fb7&query=${e}`
      );
      const data = await response.json();
      setMovies(data.results);
    }
  };

  return (
    <Stack w={"100%"} pt={"40px"}>
      <Input
        alignSelf={"center"}
        w={"50%"}
        placeholder="Search a movie"
        onChange={(e) => handleSearchMovie(e.target.value)}
      ></Input>
    </Stack>
  );
};

export default Searcher;

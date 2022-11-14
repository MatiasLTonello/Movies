import React from "react";
import { Input, Stack } from "@chakra-ui/react";

const Searcher = () => {
  return (
    <Stack w={"100%"} pt={"40px"}>
      <Input
        alignContent={"center"}
        w={"50%"}
        placeholder="Search a movie"
      ></Input>
    </Stack>
  );
};

export default Searcher;

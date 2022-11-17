import React from "react";
import { Stack, Button, Text } from "@chakra-ui/react";

const Pages = ({ page, setPage }) => {
  return (
    <Stack w="100%" direction={"row"} justifyContent={"center"}>
      <Button onClick={() => setPage(page - 1)} />
      <Text>{page}</Text>
      <Button onClick={() => setPage(page + 1)} />
    </Stack>
  );
};

export default Pages;

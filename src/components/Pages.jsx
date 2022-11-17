import React from "react";
import { Stack, Button, Text, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pages = ({ page, setPage }) => {
  const handleBeforePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <Stack w="100%" direction={"row"} justifyContent={"center"}>
      <Button
        colorScheme="red"
        leftIcon={<ChevronLeftIcon />}
        onClick={() => handleBeforePage()}
        isDisabled={page === 1}
      />
      <Text>{page}</Text>
      <Button
        rightIcon={<ChevronRightIcon />}
        colorScheme="red"
        onClick={() => handleNextPage()}
      />
    </Stack>
  );
};

export default Pages;

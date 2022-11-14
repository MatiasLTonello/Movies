import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Stack
      direction="row"
      justify="space-between"
      position="sticky"
      top={0}
      bg="#050609"
      w="100%"
      px={8}
      py={4}
      shadow="sm"
      zIndex={1}
    >
      <>
        <HStack>
          <Image src="logo.png" alt="logo" w={"10%"} />
        </HStack>
        <HStack>
          <Text>Login</Text>
        </HStack>
      </>
    </Stack>
  );
};

export default Header;

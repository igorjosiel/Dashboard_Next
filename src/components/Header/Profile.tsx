import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export default function Propfile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
          <Text>Igor Josiel</Text>
          <Text color="gray.300" fontSize="small">igorteste@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Igor Josiel" src="https://github.com/igorjosiel" />
    </Flex>
  );
}
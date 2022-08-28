import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Propfile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Josiel</Text>
          <Text color="gray.300" fontSize="small">igorteste@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Igor Josiel" src="https://github.com/igorjosiel" />
    </Flex>
  );
}
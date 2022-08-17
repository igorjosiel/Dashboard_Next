import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";
import { ReactNode } from "react";

interface NavSection {
  title: string;
  children: ReactNode;
}

export default function NavSection({ title, children }: NavSection) {
  return (
    <Box>
      <Text
          fontWeight="bold"
          color="gray.400"
          fontSize="small"
      >
        {title}
      </Text>

      <Stack spacing="4" mt="8" align="stretch">
          {children}
      </Stack>
    </Box>
  );
}
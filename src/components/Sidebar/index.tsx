import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import NavSection from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                  
                  <Link display="flex" alignItems="center">
                    <Icon as={RiGitMergeLine} fontSize="20" />
                    <Text ml="4" fontWeight="medium">Automação</Text>
                  </Link>
                </NavSection>
                <NavSection title="AUTOMAÇÂO">
                  <Link display="flex" alignItems="center">
                    <Icon as={RiInputMethodLine} fontSize="20" />
                    <Text ml="4" fontWeight="medium">Formulários</Text>
                  </Link>
                  <Link display="flex" alignItems="center">
                    <Icon as={RiGitMergeLine} fontSize="20" />
                    <Text ml="4" fontWeight="medium">Automação</Text>
                  </Link>
                </NavSection>

                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                    >
                        Automação
                    </Text>

                    <Stack spacing="4" mt="8" align="stretch">
                        
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
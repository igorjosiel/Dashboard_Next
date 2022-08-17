import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                  <NavLink icon={RiDashboardLine} text={'Dashboard'} />
                  <NavLink icon={RiContactsLine} text={'Usuários'} />
                </NavSection>
                <NavSection title="AUTOMAÇÂO">
                  <NavLink icon={RiInputMethodLine} text={'Formulários'} />
                  <NavLink icon={RiGitMergeLine} text={'Automação'} />
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
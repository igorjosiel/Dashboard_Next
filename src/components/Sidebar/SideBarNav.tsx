import { Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";
import NavSection from "./NavSection";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export default function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} text={'Dashboard'} href="/dashboard" />
                <NavLink icon={RiContactsLine} text={'Usuários'} href="/users" />
            </NavSection>
            <NavSection title="AUTOMAÇÂO">
                <NavLink icon={RiInputMethodLine} text={'Formulários'} href="/forms" />
                <NavLink icon={RiGitMergeLine} text={'Automação'} href="/automation" />
            </NavSection>
        </Stack>
    )
}
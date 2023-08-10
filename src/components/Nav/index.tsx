import Link from "next/link"
import { Center, Container, HStack, styled } from "../../../styled-system/jsx"
import { Logotype } from "./Logotype"
import { NavItem } from "./NavItem"

type Props = {
  pathname: string
}

const StyledLink = styled(Link)

export function Nav({ pathname }: Props) {
  return (
    <styled.nav
      borderBottom="1px solid rgb(47, 51, 54)"
      position="sticky"
      top="0"
      zIndex="1"
      bg="#000"
    >
      <Container maxW="xl" w="100%" py="2">
        <Center>
          <StyledLink
            href="/"
            ml="2"
            mr="6"
            _hover={{
              backgroundColor: "rgba(231, 233, 234, 0.1)",
            }}
            _active={{
              backgroundColor: "rgba(231, 233, 234, 0.08)",
            }}
            w="36px"
            h="36px"
            p="3"
            boxSizing="content-box"
            display="flex"
            flexShrink="0"
            alignItems="center"
            justifyContent="center"
            borderRadius="9999px"
            _focusVisible={{
              outline: "none",
              backgroundColor: "rgba(231, 233, 234, 0.14)",
            }}
            title="Home"
          >
            <Logotype />
          </StyledLink>
          <HStack gap="2">
            <NavItem href="/profile" pathname={pathname} title="Profile" />
            <NavItem href="/contact" pathname={pathname} title="Contact" />
          </HStack>
        </Center>
      </Container>
    </styled.nav>
  )
}

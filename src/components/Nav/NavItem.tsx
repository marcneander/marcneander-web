import Link from "next/link"
import { styled } from "../../../styled-system/jsx"

type Props = {
  title: string
  href: string
  pathname: string
}

const StyledLink = styled(Link)

export function NavItem({ title, href, pathname }: Props) {
  return (
    <StyledLink
      href={href}
      {...{
        "&[data-state=active]": {
          fontWeight: "bold",
          backgroundColor: "rgba(231, 233, 234, 0.1)",
        },
      }}
      textAlign="center"
      _active={{
        backgroundColor: "rgba(231, 233, 234, 0.08)",
      }}
      fontSize="lg"
      _hover={{
        backgroundColor: "rgba(231, 233, 234, 0.1)",
      }}
      py="3"
      px="4"
      borderRadius="9999px"
      data-state={pathname === href ? "active" : "inactive"}
      _after={{
        content: "attr(title)",
        fontWeight: "700",
        height: "0",
        overflow: "hidden",
        display: "block",
        visibility: "hidden",
      }}
      _focusVisible={{
        outline: "none",
        backgroundColor: "rgba(231, 233, 234, 0.14)",
      }}
      title={title}
    >
      {title}
    </StyledLink>
  )
}

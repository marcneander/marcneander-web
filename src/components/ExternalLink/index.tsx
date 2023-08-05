import { styled } from "../../../styled-system/jsx"

type Props = {} & React.ComponentProps<typeof styled.a>

export function ExternalLink(props: Props) {
  return (
    <styled.a
      color="#f91880"
      _hover={{
        textDecoration: "underline",
      }}
      {...props}
    ></styled.a>
  )
}

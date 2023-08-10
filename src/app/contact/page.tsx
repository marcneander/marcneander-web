import { Metadata } from "next"
import { Center, Container, styled } from "../../../styled-system/jsx"
import { Nav } from "@/components/Nav"
import Image from "next/image"
import { ExternalLink } from "@/components/ExternalLink"

const pathname = "/contact"
export const metadata: Metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <styled.div display="flex" flexDirection="column" h="100%">
      <Nav pathname={pathname} />
      <Container maxW="xl" w="100%" textAlign="center" mt="14" flexGrow="1">
        <Center mb="10">
          <styled.div
            borderRadius="9999px"
            overflow="hidden"
            transform="translateZ(0)"
            {...{
              "& img": {
                transition: "transform .2s ease-in-out",
              },
            }}
            _hover={{
              "& img": {
                transform: "scale(1.15)",
              },
            }}
          >
            <Image
              priority
              src="/contact.png"
              width={240}
              height={240}
              alt="Climbing in the mountains"
              style={{ borderRadius: "9999px" }}
            />
          </styled.div>
        </Center>
        <styled.h1 fontWeight="700" fontSize="xl" mb="4">
          Contact
        </styled.h1>
        <styled.p mb="4">
          If you’re thinking of getting in touch with me I’m available on the following channels:
        </styled.p>
        <styled.p>
          <ExternalLink href="mailto:marcneander@gmail.com">marcneander@gmail.com</ExternalLink>
        </styled.p>
        <styled.p>
          <ExternalLink
            href="https://www.linkedin.com/in/marc-neander-789b8570/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ExternalLink>
        </styled.p>
        <styled.p>
          <ExternalLink
            href="https://github.com/marcneander/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </ExternalLink>
        </styled.p>
        <styled.p>
          <ExternalLink
            href="https://twitter.com/marcneander"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </ExternalLink>
        </styled.p>
      </Container>
      <styled.footer textAlign="center" py="6" mt="6">
        <styled.p color="rgba(255, 255, 255, 0.7)" fontSize="sm">
          © 2023 Marc Neander
        </styled.p>
      </styled.footer>
    </styled.div>
  )
}

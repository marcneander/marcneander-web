import { Metadata } from "next"
import { Center, Container, styled } from "../../styled-system/jsx"
import { Nav } from "@/components/Nav"
import Image from "next/image"

const pathname = "/"
export const metadata: Metadata = {
  title: "Home / Marc Neander",
}

export default function Home() {
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
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src="/home.png"
              priority
              width={240}
              height={240}
              alt="Climbing in the mountains"
              style={{ borderRadius: "9999px" }}
            />
          </styled.div>
        </Center>
        <styled.h1 fontWeight="700" fontSize="xl" mb="4">
          Hello!
        </styled.h1>
        <styled.p mb="4">
          I’m Marc Neander, a freelancing Full Stack Engineer based in <strong>Stockholm</strong>.
          I’ve been improving the web since 2006.
        </styled.p>
        <styled.p>
          I make sure applications are <strong>performant</strong>, <strong>accessible</strong>,{" "}
          <strong>SEO optimized</strong> and <strong>user friendly</strong>.
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

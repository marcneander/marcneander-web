import { Metadata } from "next"
import { Center, Container, HStack, Stack, VStack, styled } from "../../../styled-system/jsx"
import { Nav } from "@/components/Nav"
import Image from "next/image"
import { ExternalLink } from "@/components/ExternalLink"
import {
  Experience,
  ExperienceBadge,
  ExperienceBadgeWrap,
  ExperienceExtraInfoTitle,
  ExperienceImageWrap,
  ExperienceInfoWrap,
  ExperienceSubTitle,
  ExperienceTextWrap,
  ExperienceTitle,
} from "@/components/Experience"
import profileImage from "../../assets/images/profile.png"
import efuelLogotype from "../../assets/images/efuel.svg"
import tibberLogotype from "../../assets/images/tibber.png"
import mojangLogotype from "../../assets/icons/mojang.svg"
import blocketLogotype from "../../assets/images/blocket.png"
import bytbilLogotype from "../../assets/images/bytbil.jpg"
import tripwellLogotype from "../../assets/images/tripwell.png"
import schibstedLogotype from "../../assets/images/schibsted.png"
import pixproLogotype from "../../assets/images/pixpro.png"
import phpIcon from "../../assets/icons/php.svg"

const pathname = "/profile"
export const metadata: Metadata = {
  title: "Profile",
}

export default function Profile() {
  return (
    <styled.div display="flex" flexDirection="column" minH="100%">
      <Nav pathname={pathname} />
      <Container
        maxW="xl"
        w="100%"
        textAlign="center"
        _print={{ textAlign: "left", maxW: "100%", mt: "0", fontSize: "sm" }}
        mt="14"
      >
        <Center mb="10" _print={{ justifyContent: "flex-start" }}>
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
              lg: {
                "& img": {
                  transform: "scale(1.05)",
                },
              },
            }}
          >
            <Image
              priority
              src={profileImage}
              width={240}
              height={241}
              alt="Marc Neander portrait"
              style={{ borderRadius: "9999px" }}
              placeholder="blur"
            />
          </styled.div>
          <VStack ml="5" display="none" _print={{ display: "flex" }}>
            <styled.div w="100%">
              <styled.p>Stockholm, Sweden</styled.p>
            </styled.div>
            <styled.div w="100%">
              <styled.p>+46 73 916 26 50</styled.p>
            </styled.div>
            <styled.div w="100%">
              <styled.p>
                <ExternalLink href="mailto:marcneander@gmail.com">
                  marcneander@gmail.com
                </ExternalLink>
              </styled.p>
            </styled.div>
            <styled.div w="100%">
              <styled.p>
                <ExternalLink
                  href="https://www.linkedin.com/in/marc-neander"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/marc-neander
                </ExternalLink>
              </styled.p>
            </styled.div>
          </VStack>
        </Center>
        <styled.section
          mb="4"
          display="none"
          _print={{
            display: "block",
          }}
        >
          <styled.h1 fontWeight="700" fontSize="3xl">
            Marc Neander
          </styled.h1>
        </styled.section>
        <styled.section
          display="none"
          _print={{
            display: "block",
            pageBreakInside: "avoid",
            mb: "8",
          }}
        >
          <styled.h1 fontWeight="700" fontSize="xl" mb="4">
            Roles
          </styled.h1>
          <styled.ul listStyle="disc" pl="5">
            <styled.li w="auto">Fullstack</styled.li>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Architect</li>
            <li>Devops</li>
          </styled.ul>
        </styled.section>
        <styled.section
          mb="14"
          _print={{
            pageBreakInside: "avoid",
            mb: "8",
          }}
        >
          <styled.h1 fontWeight="700" fontSize="xl" mb="4">
            About
          </styled.h1>
          <styled.p mb="4">
            Senior software engineer with more than 10 years of professional experience.
          </styled.p>
          <styled.p mb="4">
            I typically build front-ends with{" "}
            <ExternalLink href="https://react.dev" target="_blank" rel="noopener noreferrer">
              React
            </ExternalLink>{" "}
            and back-ends with{" "}
            <ExternalLink href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
              Node.js
            </ExternalLink>
            . Passionate about performance, aesthetics, infrastructure, user experience and
            accessibility. I’m a social and quality driven team player. Able to lead projects and
            people.
          </styled.p>
          <styled.p>
            Off work I’m first and foremost a dad to my two kids but my passion for rock climbing is
            still strong and I try to get out as often as I can.
          </styled.p>
        </styled.section>
        <styled.section
          mb="14"
          _print={{
            pageBreakInside: "avoid",
            mb: "8",
          }}
        >
          <styled.h2 fontWeight="700" fontSize="xl" mb="4">
            Skill
          </styled.h2>
          <styled.p mb="4">
            A solid JavaScript/TypeScript, CSS & HTML foundation. I’m a problemsolver, performance
            optimizer and code quality advocate. Smooth animations and pixel perfection, that’s a
            given.
          </styled.p>
          <styled.p mb="4">
            Currently (extra) excited about gRPC, tRPC, GraphQL, NextJS/Remix, error monitoring, IaC
            and DX in general.
          </styled.p>
          <styled.p mb="4">
            Designed several large scale applications, both front-ends, back-ends and
            infrastructures. Built up development teams from scratch, being part of numerous hiring
            processes.
          </styled.p>
          <styled.p mb="4">
            I’ve been a mentor for several developers during my career and I’m always happy to share
            what I know and what I don’t.
          </styled.p>
        </styled.section>
        <styled.section
          mb="14"
          _print={{
            pageBreakInside: "avoid",
            mb: "8",
          }}
        >
          <styled.h1 fontWeight="700" fontSize="xl" mb="4">
            Experience
          </styled.h1>
          <Experience>
            <ExperienceImageWrap>
              <Image src={efuelLogotype} width={66} height={66} alt="EFUEL logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Full Stack Developer</ExperienceTitle>
              <ExperienceSubTitle>EFUEL</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>May 2022 - Present</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>
                    Setup a scalable infrastructure from scratch in GCP using Terraform. Using
                    services like GKE, Cloud SQL, Cloud Storage, Cloud DNS, Pub/Sub, IDP, Secret
                    Manager and more.
                  </li>
                  <li>
                    Setup a sophisticated CI/CD pipeline using Github Actions, Docker images, ArgoCD
                    & Kubernetes.
                  </li>
                  <li>Designing and developing multiple back-end services.</li>
                  <li>
                    Built an ecommerce front-end in Next.js using Shopify headless and Algolia as
                    the search engine.
                  </li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>TypeScript</ExperienceBadge>
              <ExperienceBadge>GCP</ExperienceBadge>
              <ExperienceBadge>Terraform</ExperienceBadge>
              <ExperienceBadge>React</ExperienceBadge>
              <ExperienceBadge>Next.js</ExperienceBadge>
              <ExperienceBadge>Kubernetes</ExperienceBadge>
              <ExperienceBadge>GraphQL</ExperienceBadge>
              <ExperienceBadge>NestJS</ExperienceBadge>
              <ExperienceBadge>gRPC</ExperienceBadge>
              <ExperienceBadge>Strapi</ExperienceBadge>
              <ExperienceBadge>Algolia</ExperienceBadge>
              <ExperienceBadge>Prisma</ExperienceBadge>
              <ExperienceBadge>PostgreSQL</ExperienceBadge>
              <ExperienceBadge>MongoDB</ExperienceBadge>
              <ExperienceBadge>Github Actions</ExperienceBadge>
              <ExperienceBadge>Shopify</ExperienceBadge>
              <ExperienceBadge>Zustand</ExperienceBadge>
              <ExperienceBadge>Sentry</ExperienceBadge>
              <ExperienceBadge>Redis</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={tibberLogotype} width={66} height={66} alt="Tibber logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Full Stack Developer</ExperienceTitle>
              <ExperienceSubTitle>Tibber</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Jan 2021 - May 2022</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Researching, designing and devloping a new scaleable ecommerce platform.</li>
                  <li>Developing integrations with Klarna, Adyen & Ingrid</li>
                  <li>
                    Developing a hyperdynamic multilingual website using Contentful CMS with a
                    complex setup
                  </li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>TypeScript</ExperienceBadge>
              <ExperienceBadge>React</ExperienceBadge>
              <ExperienceBadge>Next.js</ExperienceBadge>
              <ExperienceBadge>GraphQL</ExperienceBadge>
              <ExperienceBadge>Algolia</ExperienceBadge>
              <ExperienceBadge>Contentful</ExperienceBadge>
              <ExperienceBadge>Docker</ExperienceBadge>
              <ExperienceBadge>AWS</ExperienceBadge>
              <ExperienceBadge>Github Actions</ExperienceBadge>
              <ExperienceBadge>Redux Toolkit</ExperienceBadge>
              <ExperienceBadge>Redis</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={mojangLogotype} width={66} height={66} alt="Mojang logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Front-end Developer</ExperienceTitle>
              <ExperienceSubTitle>Mojang</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Jan 2019 - Dec 2020</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>
                    Designing and developing a new front-end platform from scratch for the Minecraft
                    launcher using React, Typescript, Webpack, Docker etc.
                  </li>
                  <li>Creating a lightweight CMS solution for dynamic content</li>
                  <li>Creating a Minecraft skin visualizer using Three.js</li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>TypeScript</ExperienceBadge>
              <ExperienceBadge>React</ExperienceBadge>
              <ExperienceBadge>Three.js</ExperienceBadge>
              <ExperienceBadge>Webpack</ExperienceBadge>
              <ExperienceBadge>Sentry</ExperienceBadge>
              <ExperienceBadge>Contentful</ExperienceBadge>
              <ExperienceBadge>Docker</ExperienceBadge>
              <ExperienceBadge>Azure Cloud</ExperienceBadge>
              <ExperienceBadge>Azure Pipelines</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={blocketLogotype} width={66} height={66} alt="Blocket logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Full Stack Developer</ExperienceTitle>
              <ExperienceSubTitle>Blocket</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Jan 2018 - Jan 2019</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Develop and maintain services, both front-end and back-end</li>
                  <li>Develop and deploy several new micro-services using Node.js, Express etc.</li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>JavaScript</ExperienceBadge>
              <ExperienceBadge>React</ExperienceBadge>
              <ExperienceBadge>Node.js</ExperienceBadge>
              <ExperienceBadge>Prisma</ExperienceBadge>
              <ExperienceBadge>GraphQL</ExperienceBadge>
              <ExperienceBadge>Webpack</ExperienceBadge>
              <ExperienceBadge>Sentry</ExperienceBadge>
              <ExperienceBadge>Express</ExperienceBadge>
              <ExperienceBadge>Docker</ExperienceBadge>
              <ExperienceBadge>AWS</ExperienceBadge>
              <ExperienceBadge>Jenkins</ExperienceBadge>
              <ExperienceBadge>Redis</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={bytbilLogotype} width={66} height={66} alt="Bytbil logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Front-end Developer</ExperienceTitle>
              <ExperienceSubTitle>Byt Bil</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Sep 2016 – Jan 2018</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Develop and maintain a styleguide for use throughout the organization</li>
                  <li>Develop and maintain front-end for several systems</li>
                  <li>
                    Designing a new front-end platform using React, Redux, Express, Webpack, Docker
                    etc.
                  </li>
                  <li>Ensure platform performance is optimized</li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>JavaScript</ExperienceBadge>
              <ExperienceBadge>React</ExperienceBadge>
              <ExperienceBadge>Redux</ExperienceBadge>
              <ExperienceBadge>Webpack</ExperienceBadge>
              <ExperienceBadge>CSS</ExperienceBadge>
              <ExperienceBadge>Python</ExperienceBadge>
              <ExperienceBadge>Docker</ExperienceBadge>
              <ExperienceBadge>Jenkins</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={tripwellLogotype} width={66} height={66} alt="Tripwell logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Front-end Developer</ExperienceTitle>
              <ExperienceSubTitle>Tripwell</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>May 2016 – Sep 2016</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Develop and maintain front-end for Tripwell.com</li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>JavaScript</ExperienceBadge>
              <ExperienceBadge>jQuery</ExperienceBadge>
              <ExperienceBadge>Webpack</ExperienceBadge>
              <ExperienceBadge>CSS</ExperienceBadge>
              <ExperienceBadge>Python</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={schibstedLogotype} width={66} height={66} alt="Schibsted logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Lead Front-end Developer</ExperienceTitle>
              <ExperienceSubTitle>SCM Ventures</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Apr 2015 - May 2016</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Lead and advise small front-end team</li>
                  <li>Leading international collaboration with development team from Africa</li>
                  <li>Design and develop new front-end platform using Angular, gulp etc.</li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>JavaScript</ExperienceBadge>
              <ExperienceBadge>AngularJS</ExperienceBadge>
              <ExperienceBadge>Gulp</ExperienceBadge>
              <ExperienceBadge>PostgreSQL</ExperienceBadge>
              <ExperienceBadge>CSS</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={schibstedLogotype} width={66} height={66} alt="Schibsted logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Front-end Developer</ExperienceTitle>
              <ExperienceSubTitle>SCM Ventures</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Jan 2012 – Apr 2015</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Develop and maintain front-end for multisite classified platform</li>
                  <li>Deploy several new sites in different countries around the world</li>
                  <li>
                    Performance enhance platform to serve countries with slow
                    connection/featurephones
                  </li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>HTML</ExperienceBadge>
              <ExperienceBadge>CSS</ExperienceBadge>
              <ExperienceBadge>JavaScript</ExperienceBadge>
              <ExperienceBadge>jQuery</ExperienceBadge>
              <ExperienceBadge>PHP</ExperienceBadge>
              <ExperienceBadge>PostgreSQL</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
          <Experience>
            <ExperienceImageWrap>
              <Image src={pixproLogotype} width={66} height={66} alt="Pixpro logotype" />
            </ExperienceImageWrap>
            <ExperienceInfoWrap>
              <ExperienceTitle>Developer</ExperienceTitle>
              <ExperienceSubTitle>Pixpro Stockholm</ExperienceSubTitle>
              <ExperienceExtraInfoTitle>Dec 2009 – Jun 2011</ExperienceExtraInfoTitle>
              <ExperienceTextWrap>
                <ul>
                  <li>Develop customized Joomla templates</li>
                  <li>Develop customized Joomla extensions</li>
                  <li>Debug and support customers with their Joomla website</li>
                </ul>
              </ExperienceTextWrap>
            </ExperienceInfoWrap>
            <ExperienceBadgeWrap>
              <ExperienceBadge>HTML</ExperienceBadge>
              <ExperienceBadge>CSS</ExperienceBadge>
              <ExperienceBadge>JavaScript</ExperienceBadge>
              <ExperienceBadge>MooTools</ExperienceBadge>
              <ExperienceBadge>Joomla</ExperienceBadge>
              <ExperienceBadge>PHP</ExperienceBadge>
              <ExperienceBadge>MySQL</ExperienceBadge>
            </ExperienceBadgeWrap>
          </Experience>
        </styled.section>
      </Container>
      <styled.footer textAlign="center" py="6" mt="6">
        <styled.p color="rgba(255, 255, 255, 0.7)" fontSize="sm">
          © 2023 Marc Neander
        </styled.p>
      </styled.footer>
    </styled.div>
  )
}

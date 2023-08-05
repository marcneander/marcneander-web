import { styled } from "../../../styled-system/jsx"

export function Experience({ children }: { children: React.ReactNode }) {
  return (
    <styled.div
      textAlign="left"
      display="flex"
      bg="rgb(32, 35, 39)"
      borderRadius="16px"
      p={{ base: 4, md: 5 }}
      mb="6"
    >
      {children}
    </styled.div>
  )
}

export function ExperienceTitle({ children }: { children: React.ReactNode }) {
  return (
    <styled.h2 fontWeight="700" fontSize="md">
      {children}
    </styled.h2>
  )
}

export function ExperienceSubTitle({ children }: { children: React.ReactNode }) {
  return <styled.h3 fontSize="md">{children}</styled.h3>
}

export function ExperienceExtraInfoTitle({ children }: { children: React.ReactNode }) {
  return (
    <styled.h4 fontSize="sm" color="rgba(255, 255, 255, 0.7)">
      {children}
    </styled.h4>
  )
}

export function ExperienceTextWrap({ children }: { children: React.ReactNode }) {
  return (
    <styled.div
      mt="4"
      fontSize="sm"
      {...{
        "& ul": {
          pl: "4",
          listStyleType: "disc",
        },
      }}
    >
      {children}
    </styled.div>
  )
}

export function ExperienceImageWrap({ children }: { children: React.ReactNode }) {
  return (
    <styled.div mr={{ base: 4, md: 8 }} my="1" flexShrink="0" w={{ base: "44px", md: "66px" }}>
      {children}
    </styled.div>
  )
}

export function ExperienceInfoWrap({ children }: { children: React.ReactNode }) {
  return <styled.div>{children}</styled.div>
}

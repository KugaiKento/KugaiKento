import { Box, Flex, HStack, Link, Spacer, Image, Heading, Center} from "@chakra-ui/react"


function App() {
  return (
    <Box w='100%' h='100vh'color={"black"} maxW={"1400px"} mx={"auto"}>
        <Flex mx={4}>
          <Center>
            <Heading fontSize={24} color={"white"}>KentoKugai</Heading>
          </Center>
          <Spacer/>
          <HStack m={4} color={"white"} gap={4}>
            <Link fontWeight={"bold"}>About</Link>
            <Link fontWeight={"bold"}>portfolio</Link>
            <Link href="https://note.com/kento0808web" isExternal fontWeight={"bold"}>Blog</Link>      
          </HStack>
        </Flex>
        <Center mt={20}>
          <Box color={"white"} justifyItems="center">
            <Image src="./images/kento.png" w={220} h={220} borderRadius="50%" mb={4} fit="cover"></Image>
            <Heading>WebEngineer</Heading>
            <Image src="https://skillicons.dev/icons?i=js,html,react,nodejs,docker" mt={10}></Image>
          </Box>
        </Center>
    </Box>
  )
}

export default App

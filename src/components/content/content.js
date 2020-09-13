import React from 'react'
import { Flex, Text, Heading, Box, Divider } from '@chakra-ui/core'
import Lottie from "react-lottie"
import Animation from '../../assets/anim.json'


function Content() {

    return (
        <div>
            <Flex
                id="about"
                p={{ sm: "3rem 2rem", lg: "3rem 5rem" }}
                align="center"
                bg="gray.50"
                wrap="wrap"
            >
                <Flex flexGrow={1}>
                    <Lottie
                        options={{
                            animationData: Animation,
                        }}
                        height={"100%"}
                        width={"100%"}
                    />
                </Flex>
                <Flex flexGrow={2} justify="center" flexDirection="column">
                    <Box mx="auto" padding="2rem" width={{ md: "50vw" }}>
                        <Heading
                            size="xl"
                            textAlign="center"
                            mt="1rem"
                            color="gray.700"
                        >
                            A better way to grow your creative business
                </Heading>
                        <Text
                            fontSize="md"
                            textAlign="center"
                            mt="1rem"
                            color="gray.600"
                        >
                            Zibbet exists to help artists, makers and creative entrepreneurs sell more. Now you can list a product once, sell it everywhere and grow your sales faster.
                </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex
                id="about"
                p={{ sm: "3rem 2rem", lg: "3rem 5rem" }}
                align="center"
                bg="gray.50"
                wrap="wrap"
            >
                <Flex flexGrow={1}>
                    <Lottie
                        options={{
                            animationData: Animation,
                        }}
                        height={"100%"}
                        width={"100%"}
                    />
                </Flex>
                <Flex flexGrow={2} justify="center" flexDirection="column">
                    <Box mx="auto" padding="2rem" width={{ md: "50vw" }}>
                        <Heading
                            size="xl"
                            textAlign="center"
                            mt="1rem"
                            color="gray.700"
                        >
                            Keep your inventory in sync
            </Heading>
                        <Text
                            fontSize="md"
                            textAlign="center"
                            mt="1rem"
                            color="gray.600"
                        >
                            Keeping track of your products across multiple sales channels is time consuming and prone to error. Zibbet keeps your stock levels in perfect sync, tracking every sale you make and automatically updating your inventory everywhere you sell.
            </Text>
                    </Box>
                </Flex>
            </Flex>
        </div>
    )
}

export default Content

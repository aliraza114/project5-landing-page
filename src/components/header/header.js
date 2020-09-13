import React, { useState } from "react"
import './header.css'
import {
    Flex, Text, Link, Button, Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Heading, Image
} from "@chakra-ui/core"
import { MdMenu } from "react-icons/md"

const NavLink = ({ children, ...props }) => (
    <Link
        height="100%"
        px={2}
        fontSize="lg"
        color="white"
        _hover={{ textDecor: "none" }}
        {...props}
    >
        {children}
    </Link>
)

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const onClose = () => setNavbar(!navbar)
    return (
        <Flex
            bgImage="linear-gradient(90deg, rgba(69,168,222,1) 0%, rgba(39,128,195,1) 100%)"
            maxW="100%"
            px={5}
            py={4}
            roundedBottom="0.2rem"
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <Image src="https://www.zibbet.com/wp-content/uploads/2019/01/Logo.svg" alt="Logo" />
            </Flex>

            <Flex
                justifyContent="center"
                display={{ xs: "none", md: "flex" }}
                justify="center"
                align="center"
            >
                <NavLink href="/#" ml="0.5rem">
                    Pricing
                </NavLink>
                <NavLink href="/#" ml="0.5rem">
                    Channels
                </NavLink>
                <NavLink href="/#about" ml="0.5rem">
                    About
                </NavLink>
                <NavLink href="/#courses" ml="0.5rem" className="testMe" >
                    Resources
                </NavLink>
                <Link
                    href="/#contact"
                    _hover={{ textDecor: "none" }}
                    onClick={onClose}
                >
                    <Button ml="0.5rem">Get Started</Button>
                </Link>
            </Flex>
            <Box
                display={{ xs: "flex", md: "none" }}
                onClick={() => setNavbar(!navbar)}
            >
                <MdMenu size="1.8rem" color="white" />
            </Box>

            <Drawer
                isOpen={navbar}
                placement="right"
                size="full"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading>CodeSchool</Heading>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex flexDir="column">
                            <NavLink
                                onClick={onClose}
                                href="/#"
                                color="red"
                                mt="1rem"
                            >
                                Sales Channel
                            </NavLink>
                            <NavLink
                                onClick={onClose}
                                href="/#"
                                color="red"
                                mt="1rem"
                            >
                                Pricing
                            </NavLink>
                            <NavLink
                                onClick={onClose}
                                href="/#"
                                color="red"
                                mt="1rem"
                            >
                                About
                            </NavLink>
                            <NavLink
                                onClick={onClose}
                                href="/#about"
                                mt="1rem"
                                color="red"
                            >
                                Resources
                            </NavLink>
                            <NavLink
                                onClick={onClose}
                                href="/#contact"
                                _hover={{ textDecor: "none" }}
                            >
                                <Button mt="1rem" variantColor="blue">
                                    Get Started
                                </Button>
                            </NavLink>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Header
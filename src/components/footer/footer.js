import React, { useState } from "react"
import { Flex, Text, Link } from "@chakra-ui/core"
import Shake from 'react-reveal/Shake'
import { motion } from 'framer-motion'

import '../../index.css'

const Motion = motion.custom(Text)

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <Flex
            bg="gray"
            maxW="100%"
            p={5}

            roundedBottom="0.2rem"
            justifyContent="center"
            alignItems="center"
        >
            <Motion>
                <Shake>
                    <Text className="footerText">
                        Made By <Link href="http://aliraza-portfolio.surge.sh/" isExternal>@janigaga</Link>
                    </Text>
                </Shake>
            </Motion>
        </Flex>
    )
}

export default Header
import React from 'react'
import { Heading, Text, Image, Box } from '@chakra-ui/core'
import Spin from 'react-reveal/Spin'
import '../../index.css'
import { motion } from 'framer-motion'

const Motion = motion.custom(Box)

function Item(props) {
    return (
        <Motion
        flexDirection="column">
        <Box p="6">
            <Spin>     
            <Image className="imageSize" background={props.item.bgColor} src={props.item.image} />
            </Spin>
            <Heading as="h5" size="md">
                {props.item.heading}
            </Heading>
            <Text>
                {props.item.text}
            </Text>
        </Box>
        </Motion>
    )
}

export default Item


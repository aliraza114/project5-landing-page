import React from 'react'
import { Heading, Text, Image, Box } from '@chakra-ui/core'
import '../../index.css'

function Item(props) {
    return (
        <Box className="bgClass" p="6">
            <Image className="imageSize" src={props.item.image} />
            <Heading as="h5" size="md">
                {props.item.heading}
            </Heading>
            <Text>
                {props.item.text}
            </Text>
        </Box>
    )
}

export default Item


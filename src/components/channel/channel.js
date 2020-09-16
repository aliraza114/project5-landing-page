import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/core'


import Item from './item'

function Channel() {
    const channels = [
        {
            image: 'https://www.zibbet.com/wp-content/uploads/2019/01/etsy-test.svg',
            heading: 'Sell on Etsy',
            text: 'Sell to millions of global shoppers on the leading creative marketplace.',
            bgColor: '#F45800'
        },
        {
            image: 'https://www.zibbet.com/wp-content/uploads/2020/02/Facebook-icon-2.svg',
            heading: 'Facebook Shop',
            text: 'Sell right from your Facebook Page with this seamless shopping experience.',
            bgColor: '#1877F2'
        },
        {
            image: 'https://www.zibbet.com/wp-content/uploads/2020/06/Insatgram-icon.png',
            heading: 'Instagram',
            text: 'Create a mobile storefront and give your audience a simpler way to shop.',
            bgColor: '#B333AC'
        },
        {
            image: 'https://www.zibbet.com/wp-content/uploads/2019/01/zibbet-test.svg',
            heading: 'Zibbet Marketplace',
            text: 'Sell genuinely handmade creations, vintage finds and craft supplies.',
            bgColor: '#1BAAA0'
        },
        {
            image: 'https://www.zibbet.com/wp-content/uploads/2019/01/ac-test.svg',
            heading: 'A.C. Moore Marketplace',
            text: 'Sell in the handmade marketplace by one of the leading arts & crafts retailers.',
            bgColor: '#5BA2F1'
        },
        {
            image: 'https://www.zibbet.com/wp-content/uploads/2019/01/stitch-test.svg',
            heading: 'Stitch Websites',
            text: 'Build a beautiful and unique standalone website to amplify your brand.',
            bgColor: '#F9B121'
        },
    ]
    return (
        <Flex
            align="center"
            flexDir="column"
        >
            <Heading
                textAlign="center"
                mt="1rem"
                mb="2.5rem"
            >
                Our growing list of sales channels
            </Heading>
            <Flex className="bgClass" wrap="wrap" justify="space-evenly">
                {channels.map((item) => {
                    return (
                        <Box key={item.heading} p="1rem">
                            <Item item={item} />
                        </Box>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default Channel

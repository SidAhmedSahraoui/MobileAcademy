import React from 'react'
import { Box, Center } from 'native-base';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Header from '../components/Header';

const CustomDrawer = (props : any) => {
    return (
        <Box flex={1}>
            <DrawerContentScrollView {...props}>
                <Center pt={10}>
                    <Header />
                </Center>
                <Box pt={5}>
                    <DrawerItemList {...props} />
                </Box>
            </DrawerContentScrollView>
        </Box>
    )
}

export default CustomDrawer
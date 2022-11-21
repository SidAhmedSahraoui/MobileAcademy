import { Box, Center, Checkbox, CheckIcon, HStack, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import FormCard from './FormCard'
import { colors } from '../assets/colors';
import CustomCheck from './CustomCheck';

const ProductType = () => {

    const styles = {
        circleBig : {
            borderColor : colors.iconInput,
            borderRadius : 20,
            borderWidth : 1,
            height : 30,
            width : 30,
        },
        circleSmall : {
            backgroundColor : colors.primary,
            borderRadius : 20,
            height : 18,
            width : 18,
        },
        text : {
            fontSize : 17,
            lineHeight : 22,
            color : colors.primaryBlack
        }
    }

    return (
        <FormCard header='Product type'>
            <HStack alignItems='center' space={10}>
                <CustomCheck text='Physical' state={true} />
                <CustomCheck text='Digital' state={false} />
            </HStack>
        </FormCard>
    )
}

export default ProductType
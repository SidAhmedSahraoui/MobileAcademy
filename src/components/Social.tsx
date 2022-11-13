import { Text, HStack, Image } from "native-base";
import React from 'react'
import { colors } from "../assets/colors";
import { SocialProps } from "../types";

const Social = ({ social, text, wide } : SocialProps) => {

    const styles = {
        socialItem : {
            borderColor : colors.primary,
            borderWidth : 1,
            borderRadius : 5,
            width : wide ? '100%' : '85%',
            height : 48,
        },
        socialText : {
            fontSize : 14,
            lineHeight : 20,
            color : colors.primaryBlack,
            fontFamily : 'SourceSansPro-SemiBold'
        }
    }

    return (
        <HStack alignItems='center' justifyContent='center' style={styles.socialItem} space={6}>
            {
                social && (
                    <Image
                        source={require(`../assets/img/facebook.png`)}
                        alt='facebook'
                        size={7}
                    />
                )
            }

            {
                !social && (
                    <Image
                        source={require(`../assets/img/google.png`)}
                        alt='google'
                        size={7}
                    />
                )
            }
            <Text fontWeight='600' style={styles.socialText}>{text}</Text>
        </HStack>
    )
}

export default Social
import { Text, HStack, Pressable, Spacer } from "native-base";
import React from 'react'
import { colors } from '../assets/colors';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Feature = ({navigation} : any) => {

    const styles = {
        headText : {
            fontSize : 13,
            lineHeight : 16,
            color : colors.blackTints,
            fontFamily : 'SourceSansPro-Regular'
        },
        boxcon : {
            marginTop : 5,
        },
        btnCon : {
            borderRadius : 5,
            backgroundColor : colors.primary,
            height : 40,
            width : 40,
        }
    }

    return (
        <HStack alignItems='center' style={styles.boxcon}>
            <Text style={styles.headText}>Featured products (7/10)</Text>
            <Spacer />
            <Pressable onPress={() => navigation.navigate('AddProduct')} style={styles.btnCon} alignItems='center' justifyContent='center'>
                <FontAwesomeIcon size={22} icon={faPlus} color={colors.white} />
            </Pressable>
        </HStack>
    )
}

export default Feature
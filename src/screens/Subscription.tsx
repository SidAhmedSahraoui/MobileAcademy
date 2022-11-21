import { Box, ScrollView, VStack } from "native-base";
import React from 'react'
import { colors } from "../assets/colors";
import HeroHead from "../layouts/Hero";
import StatusBarCon from "../components/StatusBar";
import SubscriptionCard from "../components/SubscriptionCard";
import SubscriptionHeader from "../components/SubscriptionHeader";

export const subscriptions = [
    {
        name : 'free',
        num : '0.00',
    },
    {
        name : 'Vetrina',
        num : '209,00',
        small : true
    },
    {
        name : 'Negozio',
        num : '109,00',
        small : true
    },
    {
        name : 'Vetrina',
        num : '399,00',
        small : true
    },
]

const Subscription = ({navigation} : any) => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.body,
        },
        body : {
            flex : 1,
            paddingHorizontal : 16,
            paddingVertical : 16,
        },
        cards : {
            flex : 1,
            marginTop : 50
        },
    }

    return (
        <Box style={styles.box}>
            <StatusBarCon />
            <HeroHead title='Subscription' navigation={navigation} />
            <Box style={styles.body}>
                <SubscriptionHeader />

                <Box style={styles.cards}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <VStack space={5} pb={8}>
                            {
                                subscriptions.map((sub, index) => (
                                    <SubscriptionCard key={index} sub={sub}  />
                                ))
                            }
                        </VStack>
                    </ScrollView>
                </Box>
            </Box>
        </Box>
    )
}

export default Subscription
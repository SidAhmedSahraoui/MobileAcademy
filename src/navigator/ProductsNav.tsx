import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";
import AddProduct from "../screens/AddProduct";
import { Box } from "native-base";
import StatusBarCon from "../components/StatusBar";
import HeroHead from "../layouts/Hero";
import { colors } from "../assets/colors";

const Stack = createNativeStackNavigator();

const ProductsNav = ({navigation} : any) => {

  const styles = {
    box : {
      flex : 1,
      backgroundColor : colors.body,
    }
  }

  return (
    <Box style={styles.box}>
      <StatusBarCon />
      <HeroHead title='Products' navigation={navigation} option={true} />
      <Stack.Navigator
          initialRouteName="Products"
          screenOptions={{
              headerShown: false,
          }}
      >
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </Box>
  );
}

export default ProductsNav
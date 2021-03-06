import React from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';

import { ShopNavigator, AuthNavigator } from "./ShopNavigator";
import StartupScreen from "../screens/StartupScreen";
// import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
// import CartScreen from "../screens/shop/CartScreen";



const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>)
};

export default AppNavigator;


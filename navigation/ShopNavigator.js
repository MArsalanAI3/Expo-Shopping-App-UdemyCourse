import React from "react";
import { Platform, SafeAreaView, Button, View } from "react-native";

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'

import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import ProductsOverviewScreen, { ScreenOptions as ProductOverviewScreenOptions } from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen, { ScreenOptions as ProductDetailScreenOptions } from "../screens/shop/ProductDetailScreen";
import CartScreen, { ScreenOptions as CartScreenOptions } from "../screens/shop/CartScreen";
import OrdersScreen, { ScreenOptions as OrderScreenOptions } from "../screens/shop/OrdersScreen";
import UserProductsScreen, { ScreenOptions as UserProductsScreenOptions } from "../screens/user/UserProductsScreen";
import EditProductScreen, { ScreenOptions as EditProductScreenOptions } from "../screens/user/EditProductScreen";
import AuthScreen, { ScreenOptions as AuthScreenOptions } from "../screens/user/AuthScreen";
import StartupScreen from "../screens/StartupScreen";
import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  // headerTitleStyle: { fontFamily: "open-sans-bold" },
  // headerBackTitleStyle: { fontFamily: "open-sans" },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const ProductStackNavigation = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <ProductStackNavigation.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={ProductOverviewScreenOptions} />
      <ProductStackNavigation.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={ProductDetailScreenOptions} />
      <ProductStackNavigation.Screen
        name="Cart"
        component={CartScreen}
        options={CartScreenOptions}
      />

    </ProductStackNavigation.Navigator>
  )
};

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

const OrderStackNavigation = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrderStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <ProductStackNavigation.Screen
        name="Orders"
        component={OrdersScreen}
        options={OrderScreenOptions}
      />
    </OrderStackNavigation.Navigator>
  )
};


// const OrdersNavigator = createStackNavigator(
//   { Orders: OrdersScreen },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-list" : "ios-list"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

const AdminStackNavigation = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <AdminStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <AdminStackNavigation.Screen
        name="UserPorducts"
        component={UserProductsScreen}
        options={UserProductsScreenOptions}
      />
      <AdminStackNavigation.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={EditProductScreenOptions}
      />
    </AdminStackNavigation.Navigator>
  )
};

// const AdminNavigator = createStackNavigator(
//   { UserProducts: UserProductsScreen, EditProduct: EditProductScreen },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === "android" ? "md-create" : "ios-create"}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  const dispatch = useDispatch();
  return (
    <ShopDrawerNavigator.Navigator
      drawerContentOptions={
        { activeTintColor: Colors.primary }
      } drawerContent={
        props => {
          return (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
                <DrawerItemList {...props} />
                <Button
                  title="Logout"
                  color={Colors.primary}
                  onPress={() => {
                    dispatch(authActions.logout());
                    // props.navigation.navigate("Auth");
                  }}
                />
              </SafeAreaView>
            </View>
          );
        }
      }>
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={
          {
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={props.color}
              />
            )
          }
        }
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={
          {
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={props.color}
              />
            )
          }
        }
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          )
        }}
      />

    </ShopDrawerNavigator.Navigator>
  )
};

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
//   },
//   {
//     contentOptions: { activeTintColor: Colors.primary },
//     contentComponent: props => {
//       const dispatch = useDispatch();
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
//             <DrawerNavigatorItems {...props} />
//             <Button
//               title="Logout"
//               color={Colors.primary}
//               onPress={() => {
//                 dispatch(authActions.logout());
//                 // props.navigation.navigate("Auth");
//               }}
//             />
//           </SafeAreaView>
//         </View>
//       );
//     }
//   }
// );

const AuthStackNavigation = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigation.Screen
        name="Auth"
        component={AuthScreen}
        options={AuthScreenOptions}
      />
    </AuthStackNavigation.Navigator>
  )
};


// const AuthNavigator = createStackNavigator(
//   { Auth: AuthScreen },
//   { defaultNavigationOptions: defaultNavOptions }
// );

// const MainNavigator = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
//   Shop: ShopNavigator
// });

// export default createAppContainer(MainNavigator);

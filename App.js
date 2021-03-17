import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/Feather';
import BadgeCounter from "./BadgeCounter";

const Tabs = () => {
  const TabStyle = {};

  if (Platform.OS == 'android') {
    TabStyle.paddingBottom = 10;
    TabStyle.height = 55;
  }

  return (
    <Tab.Navigator tabBarOptions={{ style: [any style here] }}>
      <Tab.Screen name="Home" component={Home} options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
      }} />
      <Tab.Screen name="Shop" component={CategoryListing} options={{
        title: 'Shop',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="box" />,
      }} />
      <Tab.Screen name="Products"       
      component={ProductListing} options={{
        title: 'Products',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="grid" />,
      }} />

      <Tab.Screen name="Cart" component={Cart} options={{
        title: 'Cart',
        tabBarIcon: ({ focused }) => <BadgeCounter focused={focused} name="shopping-cart"  />,
      }} />

      <Tab.Screen name="Settings" component={Settings} options={{
        title: 'Account',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" badge={21} />,
      }} />
    </Tab.Navigator>
  )
}

const App = () => {
  
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

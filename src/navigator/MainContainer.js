import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessagesScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import DetailScreen from '../screens/DetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

//Screen names
const homeName = 'HomeScreen';
const homeStack = 'Home';
const messagesName = 'Messages';
const cartName = 'Cart';
const accountName = 'Account';
const detailScreenName = 'DETAILS_SCREEN';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name= {homeName} component={HomeScreen} />
            <Stack.Screen name={detailScreenName} component={DetailScreen}
                          options={{
                              headerShown: true,
                              headerTitle: 'PRODUCT DETAILS',
                          }} />
        </Stack.Navigator>
    );
};

function MainContainer() {
    const products = useSelector(state => state.cartItems);
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeStack}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeStack) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === messagesName) {
                            iconName = focused ? 'mail' : 'mail-outline';
                        }else if (rn === messagesName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === cartName) {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if (rn === accountName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return (
                            <View style={{ position: 'relative' }}>
                                <Ionicons name={iconName} size={size} color={color} />

                                {rn === cartName ?
                                    <View>
                                        <View
                                            style={{
                                                position: 'absolute',
                                                right: -7,
                                                bottom: 20,
                                                height: 20,
                                                width: 20,
                                                backgroundColor: '#E96E6E',
                                                borderRadius: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={{ color: 'white', fontSize: 12 }}>
                                                {products.length}
                                            </Text>
                                        </View>
                                    </View> : null }
                            </View>
                        );
                    },
                    headerShown: false,
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70},
                }}>

                <Tab.Screen  name={homeStack} component={HomeStack} />
                <Tab.Screen name={messagesName} component={MessageScreen} />
                <Tab.Screen name={cartName} component={CartScreen} />
                <Tab.Screen name={accountName} component={AccountScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
